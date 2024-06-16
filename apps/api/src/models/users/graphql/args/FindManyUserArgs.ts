import {RestrictProperties} from '#/common/types';
import {ArgsType, Field, PartialType, registerEnumType} from '@nestjs/graphql';
import {Prisma} from '@prisma/client';
import {UserOrderByWithRelationInput} from './UserOrderByWithRelationInput';
import {UserWhereInput} from './UserWhereInput';
import {UserWhereUniqueInput} from './UserWhereUniqueInput';

registerEnumType(Prisma.UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
});

@ArgsType()
export class FindManyUserArgsStrict
  implements
    RestrictProperties<
      FindManyUserArgsStrict,
      Omit<Prisma.UserFindManyArgs, 'include' | 'select'>
    >
{
  where: UserWhereInput;
  orderBy: UserOrderByWithRelationInput[];
  cursor: UserWhereUniqueInput;
  take: number;
  skip: number;
  @Field(() => [Prisma.UserScalarFieldEnum])
  distinct: Prisma.UserScalarFieldEnum[];
}

@ArgsType()
export class FindManyUserArgs extends PartialType(FindManyUserArgsStrict) {}
