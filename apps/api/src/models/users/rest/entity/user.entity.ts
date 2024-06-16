import {User} from '@prisma/client';
import {IsOptional} from 'class-validator';
import {RestrictProperties} from 'src/common/types';

export class UserEntity implements RestrictProperties<UserEntity, User> {
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  @IsOptional()
  name: string;
  @IsOptional()
  picture: string;
}
