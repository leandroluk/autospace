import {InputType} from '@nestjs/graphql';

@InputType()
export class IntFilterInput {
  equals?: number;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
}
