import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class RegisterWithCredentialInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({nullable: true})
  picture?: string;
}
