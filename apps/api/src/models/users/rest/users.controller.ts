import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import {AllowAuthenticatedDecorator} from 'src/common/auth/AllowAuthenticatedDecorator';
import {GetUserDecorator} from 'src/common/auth/GetUserDecorator';
import {checkRowLevelPermission} from 'src/common/auth/checkRowLevelPermission';
import {PrismaService} from 'src/common/prisma/prisma.service';
import {GetUserType} from 'src/common/types';
import {CreateUser} from './dtos/create.dto';
import {UserQueryDto} from './dtos/query.dto';
import {UpdateUser} from './dtos/update.dto';
import {UserEntity} from './entity/user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticatedDecorator()
  @ApiBearerAuth()
  @ApiCreatedResponse({type: UserEntity})
  @Post()
  async create(
    @Body() createUserDto: CreateUser,
    @GetUserDecorator() user: GetUserType,
  ) {
    checkRowLevelPermission(user, createUserDto.uid);
    const result = await this.prisma.user.create({data: createUserDto});
    return result;
  }

  @ApiOkResponse({type: [UserEntity]})
  @Get()
  async findAll(@Query() userQueryDto: UserQueryDto) {
    const args: Parameters<typeof this.prisma.user.findMany>[0] = {};
    if (userQueryDto.skip) {
      args.skip = +userQueryDto.skip;
    }
    if (userQueryDto.take) {
      args.take = +userQueryDto.take;
    }
    if (userQueryDto.sortBy) {
      args.orderBy = {
        [userQueryDto.sortBy]: userQueryDto.order || 'asc',
      };
    }
    if (userQueryDto.searchBy) {
      args.where = {
        [userQueryDto.searchBy]: {
          contains: userQueryDto.search,
          mode: 'insensitive',
        },
      };
    }
    const result = this.prisma.user.findMany(args);
    return result;
  }

  @ApiOkResponse({type: UserEntity})
  @Get(':uid')
  async findOne(@Param('uid') uid: string) {
    const result = this.prisma.user.findUnique({where: {uid}});
    return result;
  }

  @ApiOkResponse({type: UserEntity})
  @ApiBearerAuth()
  @AllowAuthenticatedDecorator()
  @Put(':uid')
  async update(
    @Param('uid') uid: string,
    @Body() updateUserDto: UpdateUser,
    @GetUserDecorator() getUserType: GetUserType,
  ) {
    const user = await this.prisma.user.findUnique({where: {uid}});
    checkRowLevelPermission(getUserType, user.uid);
    const result = this.prisma.user.update({
      where: {uid},
      data: updateUserDto,
    });
    return result;
  }

  @ApiBearerAuth()
  @AllowAuthenticatedDecorator()
  @Delete(':uid')
  async remove(
    @Param('uid') uid: string,
    @GetUserDecorator() getUserType: GetUserType,
  ) {
    const user = await this.prisma.user.findUnique({where: {uid}});
    checkRowLevelPermission(getUserType, user.uid);
    const result = await this.prisma.user.delete({where: {uid}});
    return result;
  }
}
