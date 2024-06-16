import {ArgsType} from '@nestjs/graphql';
import {UserWhereUniqueInput} from './UserWhereUniqueInput';

@ArgsType()
export class FindUniqueUserArgs {
  where: UserWhereUniqueInput;
}
