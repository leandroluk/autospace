import {ObjectType} from '@nestjs/graphql';

@ObjectType()
export class AggregateCountType {
  count: number;
}
