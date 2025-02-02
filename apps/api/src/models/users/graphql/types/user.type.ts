import {Field, ObjectType} from '@nestjs/graphql';
import {User as UserType} from '@prisma/client';
import {RestrictProperties} from 'src/common/types';

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  @Field({nullable: true})
  name: string;
  @Field({nullable: true})
  picture: string;
}
