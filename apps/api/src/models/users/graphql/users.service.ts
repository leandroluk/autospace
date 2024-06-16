import {BadRequestException, Injectable} from '@nestjs/common';
import * as crypto from 'crypto';
import {PrismaService} from 'src/common/prisma/prisma.service';
import {FindManyUserArgs} from './args/FindManyUserArgs';
import {FindUniqueUserArgs} from './args/FindUniqueUserArgs';
import {RegisterWithCredentialInput} from './inputs/RegisterWithCredentialInput';
import {RegisterWithProviderInput} from './inputs/RegisterWithProviderInput';
import {UpdateUserInput} from './inputs/UpdateUserInput';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async registerWithCredential(args: RegisterWithCredentialInput) {
    const existingUser = await this.prisma.userCredential.findUnique({
      where: {email: args.email},
    });
    if (existingUser) {
      throw new BadRequestException('Email in use.');
    }
    const passwordHash = crypto
      .createHash('sha256')
      .update(args.password)
      .digest('base64url');
    const user = await this.prisma.user.create({
      data: {
        uid: crypto.randomUUID(),
        name: args.name,
        picture: args.picture,
        Credential: {
          create: {
            email: args.email,
            passwordHash,
          },
        },
        AuthProvider: {
          create: {
            type: 'CREDENTIALS',
          },
        },
      },
    });
    return user;
  }

  async registerWithProvider(args: RegisterWithProviderInput) {
    const result = await this.prisma.user.create({
      data: {
        uid: crypto.randomUUID(),
        name: args.name,
        picture: args.picture,
        AuthProvider: {
          create: {
            type: args.authProviderType,
            providerId: args.authProviderId,
          },
        },
      },
    });
    return result;
  }

  async findAll(args: FindManyUserArgs) {
    const result = await this.prisma.user.findMany(args);
    return result;
  }

  async findOne(args: FindUniqueUserArgs) {
    const result = await this.prisma.user.findUnique(args);
    return result;
  }

  async update(updateUserInput: UpdateUserInput) {
    const {uid, ...data} = updateUserInput;
    const result = await this.prisma.user.update({where: {uid}, data});
    return result;
  }

  async remove(args: FindUniqueUserArgs) {
    const result = await this.prisma.user.delete(args);
    return result;
  }
}
