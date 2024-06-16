import {Prisma} from '@prisma/client';
import {IsIn, IsOptional} from 'class-validator';
import {BaseQueryDto} from 'src/common/rest/dtos/BaseQueryDto';

export class UserQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.UserScalarFieldEnum))
  sortBy?: string;

  @IsOptional()
  @IsIn(Object.values(Prisma.UserScalarFieldEnum))
  searchBy?: string;
}
