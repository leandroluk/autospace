import {Field, InputType, PickType, registerEnumType} from '@nestjs/graphql';
import {AuthProviderType} from '@prisma/client';
import {User} from '../types/user.type';

registerEnumType(AuthProviderType, {
  name: 'AuthProviderType',
});

@InputType()
export class RegisterWithProviderInput extends PickType(
  User,
  ['name', 'picture'],
  InputType,
) {
  @Field(() => AuthProviderType)
  authProviderType: AuthProviderType;

  @Field(() => String)
  authProviderId: string;
}
