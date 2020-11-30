
import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { IUsersState } from '../states/users.state';

const getUsersMapper = (state: IAppState) => state.users;

export const getUsersSelector = createSelector(
  getUsersMapper,
  (state: IUsersState) => state
);


