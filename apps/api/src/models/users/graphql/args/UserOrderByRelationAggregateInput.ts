import {Field, InputType} from '@nestjs/graphql';
import {Prisma} from '@prisma/client';
import 'src/common/graphql/enums';

@InputType()
export class UserOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  order?: Prisma.SortOrder;
}
