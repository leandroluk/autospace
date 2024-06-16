import {InputType} from '@nestjs/graphql';

@InputType()
export class BoolFilterInput {
  equals?: boolean;
  not?: boolean;
}
