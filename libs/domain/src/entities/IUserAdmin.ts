import {ICreatable} from '#/generics/ICreatable';
import {IUnique} from '#/generics/IUnique';
import {IUpdatable} from '#/generics/IUpdatable';
import {IUser} from './IUser';

export type IUserAdmin = IUnique &
  ICreatable &
  IUpdatable & {
    User: null | IUser;
  };
