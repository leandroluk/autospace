import {InputType, PartialType} from '@nestjs/graphql';
import {User} from '@prisma/client';
import {RegisterWithProviderInput} from './RegisterWithProviderInput';

@InputType()
export class UpdateUserInput extends PartialType(RegisterWithProviderInput) {
  uid: User['uid'];
}
