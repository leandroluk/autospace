import {AuthProviderType} from '#/generics/AuthProviderType';
import {ICreatable} from '#/generics/ICreatable';
import {IUnique} from '#/generics/IUnique';
import {IUpdatable} from '#/generics/IUpdatable';
import {IUser} from './IUser';

export type IUserAuthProvider = IUnique &
  ICreatable &
  IUpdatable & {
    providerId: null | string;
    type: AuthProviderType;
    User: null | IUser;
  };
