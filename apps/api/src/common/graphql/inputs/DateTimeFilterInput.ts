import {InputType} from '@nestjs/graphql';
import {Prisma} from '@prisma/client';

@InputType()
export class DateTimeFilterInput implements Prisma.DateTimeFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
}
