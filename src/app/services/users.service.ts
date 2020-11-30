import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import UsersActions from '../store/actions/user.actions';
import { IProduct } from '../store/models/product.model';
import { IUser } from '../store/models/user.model';
import * as UsersSelectors from '../store/selectors/product.selector';
import { IAppState } from '../store/states/app.state';
import { IProductsState } from '../store/states/products.state';

const DELAY_CONST = 2000;

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient, private store: Store<IAppState>) {
    this.request();
  }

  request(): void {
    this.http.get(`${this.url}/users`)
      .pipe(delay(DELAY_CONST))
      .subscribe((users: IUser[]) => this.store.dispatch(UsersActions.SetUsersAction({ items: users, isLoading: false })));
  }

  get users$(): Observable<IProductsState> {
    return this.store.select(UsersSelectors.getProductsSelector);
  }

  delete(user: IUser): void {
    this.store.dispatch(UsersActions.DeleteUsersAction({ user }));
  }
}
