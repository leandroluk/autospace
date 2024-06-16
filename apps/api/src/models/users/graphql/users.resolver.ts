import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {AllowAuthenticatedDecorator} from 'src/common/auth/AllowAuthenticatedDecorator';
import {GetUserDecorator} from 'src/common/auth/GetUserDecorator';
import {checkRowLevelPermission} from 'src/common/auth/checkRowLevelPermission';
import {PrismaService} from 'src/common/prisma/prisma.service';
import {GetUserType} from 'src/common/types';
import {FindManyUserArgs} from './args/FindManyUserArgs';
import {FindUniqueUserArgs} from './args/FindUniqueUserArgs';
import {RegisterWithCredentialInput} from './inputs/RegisterWithCredentialInput';
import {RegisterWithProviderInput} from './inputs/RegisterWithProviderInput';
import {UpdateUserInput} from './inputs/UpdateUserInput';
import {User} from './types/user.type';
import {UsersService} from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Boolean)
  async registerWithCredential(
    @Args('registerWithCredentialInput') args: RegisterWithCredentialInput,
  ): Promise<boolean> {
    const result = await this.usersService.registerWithCredential(args);
    return Boolean(result);
  }

  @Mutation(() => Boolean)
  async registerWithProvider(
    @Args('registerWithProviderInput') args: RegisterWithProviderInput,
  ): Promise<boolean> {
    const result = await this.usersService.registerWithProvider(args);
    return Boolean(result);
  }

  @AllowAuthenticatedDecorator()
  @Query(() => [User], {name: 'users'})
  async findAll(@Args() args: FindManyUserArgs) {
    const result = await this.usersService.findAll(args);
    return result;
  }

  @AllowAuthenticatedDecorator()
  @Query(() => User, {name: 'user'})
  async findOne(@Args() args: FindUniqueUserArgs) {
    const result = await this.usersService.findOne(args);
    return result;
  }

  @AllowAuthenticatedDecorator()
  @Mutation(() => User)
  async updateUser(
    @Args('updateUserInput') args: UpdateUserInput,
    @GetUserDecorator() getUserType: GetUserType,
  ) {
    const user = await this.prisma.user.findUnique({where: {uid: args.uid}});
    checkRowLevelPermission(getUserType, user.uid);
    const result = await this.usersService.update(args);
    return result;
  }

  @AllowAuthenticatedDecorator()
  @Mutation(() => User)
  async removeUser(
    @Args() args: FindUniqueUserArgs,
    @GetUserDecorator() getUserType: GetUserType,
  ) {
    const user = await this.prisma.user.findUnique(args);
    checkRowLevelPermission(getUserType, user.uid);
    const result = await this.usersService.remove(args);
    return result;
  }
}
