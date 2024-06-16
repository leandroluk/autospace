import {Field, InputType, registerEnumType} from '@nestjs/graphql';
import {Prisma} from '@prisma/client';

registerEnumType(Prisma.QueryMode, {
  name: 'QueryMode',
});

@InputType()
export class StringFilterInput implements Prisma.StringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: string;
  @Field(() => Prisma.QueryMode)
  mode?: Prisma.QueryMode;
}
