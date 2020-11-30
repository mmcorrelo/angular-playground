import { createAction, props } from '@ngrx/store';
import { IProduct } from '../models/product.model';

const SetLoadingProductsAction = createAction('[Products] - Requesting');
const SetProductsAction = createAction('[Products] - Set Product', props<{ items: IProduct[], isLoading: boolean }>());
const GetProductAction = createAction('[Products] - Get Product');
const CreateProductAction = createAction('[Products] - Create Product Item', props<{ item: IProduct }>());
const DeleteProductAction = createAction('[Products] - Delete Product Item', props<{ id: number }>());

export default {
  SetLoadingProductsAction,
  SetProductsAction,
  GetProductAction,
  CreateProductAction,
  DeleteProductAction
};
