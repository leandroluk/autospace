import {InputType, PartialType} from '@nestjs/graphql';
import {UserWhereInputStrict} from './UserWhereInputStrict';

@InputType()
export class UserWhereInput extends PartialType(UserWhereInputStrict) {}
