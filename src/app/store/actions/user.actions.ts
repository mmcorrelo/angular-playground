import { createAction, props } from '@ngrx/store';
import { IUser } from '../models/user.model';
import { IUsersState } from '../states/users.state';

const GetUsersAction = createAction('[Users] - Get users');
const SetUsersAction = createAction('[Users] - Set users requesting', props<IUsersState>());
const CreateUsersAction = createAction('[Users] - Create users', props<{ user: IUser }>());
const DeleteUsersAction = createAction('[Users] - Delete Users', props<{ user: IUser }>());

export default {
  SetUsersAction,
  GetUsersAction,
  CreateUsersAction,
  DeleteUsersAction
};
