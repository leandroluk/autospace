import {Field, InputType, PartialType} from '@nestjs/graphql';
import {Prisma} from '@prisma/client';
import {RestrictProperties} from 'src/common/types';

@InputType()
export class UserOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      UserOrderByWithRelationInputStrict,
      Omit<
        Prisma.UserOrderByWithRelationInput,
        'Credential' | 'AuthProvider' | 'Admin'
      >
    >
{
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  picture: Prisma.SortOrder;
}

@InputType()
export class UserOrderByWithRelationInput extends PartialType(
  UserOrderByWithRelationInputStrict,
) {}
