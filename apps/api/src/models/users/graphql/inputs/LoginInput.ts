import {InputType, PickType} from '@nestjs/graphql';
import {RegisterWithCredentialInput} from './RegisterWithCredentialInput';

@InputType()
export class LoginInput extends PickType(RegisterWithCredentialInput, [
  'email',
  'password',
]) {}
