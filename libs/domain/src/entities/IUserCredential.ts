import {ICreatable} from '#/generics/ICreatable';
import {IUnique} from '#/generics/IUnique';
import {IUpdatable} from '#/generics/IUpdatable';
import {IUser} from './IUser';

export type IUserCredential = IUnique &
  ICreatable &
  IUpdatable & {
    email: string;
    passwordHash: string;
    User: null | IUser;
  };
