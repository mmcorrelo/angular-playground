import { createReducer, on } from '@ngrx/store';
import UserActions from '../actions/user.actions';
import { initialUsersState } from '../states/users.state';

export const usersReducer = createReducer(
  initialUsersState,
  on(UserActions.SetUsersAction, (state, { items, isLoading }) => ({ items, isLoading })),
  on(UserActions.GetUsersAction, (state) => ({ ...state })),
  on(UserActions.CreateUsersAction, (state, { user }) => ({ ...state, items: state.items.concat(user) })),
  on(UserActions.DeleteUsersAction, (state, { user }) => ({ ...state, item: state.items.filter(i => i.id !== user.id) }))
);
