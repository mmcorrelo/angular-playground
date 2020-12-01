import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../models/product.model';
import ProductActions from './../actions/product.actions';
import * as ProductsState from './../states/products.state';

export const productsReducer = createReducer(
  ProductsState.initialProductsState,
  on(ProductActions.SetLoadingProductsAction, state => ({ ...state, isLoading: true })),
  on(ProductActions.SetProductsAction, (state, { items, isLoading }) => ({ isLoading, items })),
  on(ProductActions.GetProductAction, (state) => ({ ...state })),
  on(ProductActions.CreateProductAction, (state, { item }) => ({ ...state, items: [item].concat(state.items) })),
  on(ProductActions.DeleteProductAction, (state, { id }) => ({ ...state, items: removeItem(state.items, id) }))
);

const removeItem = (items: IProduct[], id: number) => items.filter(item => item.id !== id);
