import {InputType} from '@nestjs/graphql';

@InputType()
export class FloatFilterInput {
  equals?: number;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: number;
}
