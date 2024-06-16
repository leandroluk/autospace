import {ArgsType} from '@nestjs/graphql';

@ArgsType()
export class PaginationInput {
  take?: number;
  skip?: number;
}
