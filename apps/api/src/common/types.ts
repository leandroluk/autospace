export type Role = 'admin' | 'manager';

export type GetUserType = {
  uid: string;
  roles: Role[];
};

export type RestrictProperties<T, U> = {
  [K in keyof T]: K extends keyof U ? T[K] : never;
} & Required<U>;
