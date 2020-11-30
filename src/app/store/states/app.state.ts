import { IUser } from '../models/user.model';
import { initialProductsState, IProductsState } from './products.state';
import { initialUsersState, IUsersState } from './users.state';

export interface IAppState {
  products: IProductsState;
  users: IUsersState;
}

export const initialAppState: IAppState = {
  products: initialProductsState,
  users: initialUsersState
};

export function getInitialState(): IAppState {
  return initialAppState;
}

