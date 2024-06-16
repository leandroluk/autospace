import {InputType} from '@nestjs/graphql';
import {User} from '../types/user.type';

@InputType()
export class UserWhereUniqueInput {
  uid: User['uid'];
}
