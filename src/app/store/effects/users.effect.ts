import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, tap, delay } from 'rxjs/operators';
import UsersActions from '../actions/user.actions';
import { IUser } from '../models/user.model';

const DELAY_CONST = 3000;

@Injectable()
export class UsersEffects {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient, private actions$: Actions) { }

  @Effect()
  users$ = this.actions$
    .pipe(
      ofType(UsersActions.GetUsersAction),
      delay(DELAY_CONST),
      mergeMap(() => this.http.get(`${this.url}/users`)
        .pipe(
          map((users: IUser[]) => UsersActions.SetUsersAction({ items: users, isLoading: false })),
          tap(() => console.log('usersEffect Finished')),
          catchError(() => EMPTY)
        ))
    );

}
