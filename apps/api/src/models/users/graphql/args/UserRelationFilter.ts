import {InputType} from '@nestjs/graphql';
import {UserWhereInput} from './UserWhereInput';

@InputType()
export class UserRelationFilter {
  is?: UserWhereInput;
  isNot?: UserWhereInput;
}
