import {InputType} from '@nestjs/graphql';

@InputType()
export class StringListFilterInput {
  equals?: string[];
  has?: string;
  hasEvery?: string[];
  hasSome?: string[];
  isEmpty?: boolean;
}
