import {registerEnumType} from '@nestjs/graphql';
import {Prisma} from '@prisma/client';

registerEnumType(Prisma.SortOrder, {
  name: 'SortOrder',
});
