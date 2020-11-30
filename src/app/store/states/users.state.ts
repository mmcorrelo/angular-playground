import { IProduct } from '../models/product.model';
import { IUser } from '../models/user.model';

export interface IUsersState {
  items: IUser[];
  isLoading: boolean;
}

export const initialUsersState: IUsersState = {
  items: [],
  isLoading: true
};


