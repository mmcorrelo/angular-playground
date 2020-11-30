
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { IAppState } from './states/app.state';
import { environment } from '../../environments/environment';
import { productsReducer } from './reducers/product.reducer';
import { usersReducer } from './reducers/users.reducer';

export const reducers: ActionReducerMap<IAppState> = {
  products: productsReducer,
  users: usersReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];
