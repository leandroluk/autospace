import {ICreatable} from '#/generics/ICreatable';
import {IUnique} from '#/generics/IUnique';
import {IUpdatable} from '#/generics/IUpdatable';
import {IUserAdmin} from './IUserAdmin';
import {IUserAuthProvider} from './IUserAuthProvider';
import {IUserCredential} from './IUserCredential';

export type IUser = IUnique &
  ICreatable &
  IUpdatable & {
    name: null | string;
    picture: null | string;
    Admin: null | IUserAdmin;
    Credential: null | IUserCredential;
    AuthProvider: null | IUserAuthProvider;
  };
