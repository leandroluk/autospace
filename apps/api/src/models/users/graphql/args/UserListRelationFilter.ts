import {InputType} from '@nestjs/graphql';
import {UserWhereInput} from './UserWhereInput';

@InputType()
export class UserListRelationFilter {
  every?: UserWhereInput;
  some?: UserWhereInput;
  none?: UserWhereInput;
}
