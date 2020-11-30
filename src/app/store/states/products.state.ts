import { IProduct } from '../models/product.model';

export interface IProductsState {
  items: IProduct[];
  isLoading: boolean;
}

export const initialProductsState: IProductsState = {
  items: [],
  isLoading: true
};


