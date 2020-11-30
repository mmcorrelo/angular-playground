
import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { IProductsState } from '../states/products.state';

const getProductsMapper = (state: IAppState) => state.products;

export const getProductsSelector = createSelector(
  getProductsMapper,
  (state: IProductsState) => state
);


