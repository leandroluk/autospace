import {SetMetadata, UseGuards, applyDecorators} from '@nestjs/common';
import {Role} from 'src/common/types';
import {AuthGuard} from './AuthGuard';

export const AllowAuthenticatedDecorator = (...roles: Role[]) => {
  const metadata = SetMetadata('roles', roles);
  const guards = UseGuards(AuthGuard);
  return applyDecorators(metadata, guards);
};
