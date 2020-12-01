
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { IAppState } from './states/app.state';
import { environment } from '../../environments/environment';
import { productsReducer } from './reducers/product.reducer';
import { usersReducer } from './reducers/users.reducer';
import { UsersEffects } from './effects/users.effect';

const reducers: ActionReducerMap<IAppState> = {
  products: productsReducer,
  users: usersReducer
};

const effects = [UsersEffects];
const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];

export {
  reducers,
  effects,
  metaReducers
};

