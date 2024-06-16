import {DateTimeFilterInput} from '#/common/graphql/inputs/DateTimeFilterInput';
import {StringFilterInput} from '#/common/graphql/inputs/StringFilterInput';
import {InputType} from '@nestjs/graphql';
import {Prisma} from '@prisma/client';
import {RestrictProperties} from 'src/common/types';
import {UserWhereInput} from './UserWhereInput';

@InputType()
export class UserWhereInputStrict
  implements
    RestrictProperties<
      UserWhereInputStrict,
      Omit<Prisma.UserWhereInput, 'Credential' | 'AuthProvider' | 'Admin'>
    >
{
  uid: StringFilterInput;
  createdAt: DateTimeFilterInput;
  updatedAt: DateTimeFilterInput;
  name: StringFilterInput;
  picture: StringFilterInput;

  AND: UserWhereInput[];
  OR: UserWhereInput[];
  NOT: UserWhereInput[];
}
