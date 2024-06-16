import {ForbiddenException} from '@nestjs/common';
import {GetUserType, Role} from 'src/common/types';

export const checkRowLevelPermission = (
  user: GetUserType,
  requestedUid?: string | string[],
  roles: Role[] = ['admin'],
): boolean => {
  if (requestedUid) {
    const listUid = Array<string>().concat(requestedUid).filter(Boolean);
    const userMatchesRole = user.roles?.some(role => roles.includes(role));
    const userMatchersUid = listUid.includes(user.uid);
    return userMatchesRole || userMatchersUid;
  }
  throw new ForbiddenException();
};
