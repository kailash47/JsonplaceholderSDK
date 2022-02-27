export interface IUser {
  insertUser?(user: User): Promise<ResponseObj<User>>;
  updateUser?(user: User): Promise<ResponseObj<User>>;
  deleteUser?(userId: User): Promise<ResponseObj<User>>;
  getUsers?(): Promise<ResponseObj<User[]>>;
  getUserById?(userId: User): Promise<ResponseObj<User>>;
}

export interface ResponseObj<T> {
  status: boolean;
  message: string;
  code: string;
  data: T;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone?: string;
  website: string;
  company: Company;
}

export interface ConfigParam {
  token: string;
  id: string;
  log: boolean;
  version?: string;
}

export interface PathConfig<T> {
  method: string;
  path: string;
  queryparams?: T | any;
  body?: T;
}
