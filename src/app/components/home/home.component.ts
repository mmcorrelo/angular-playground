import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import userActions from 'src/app/store/actions/user.actions';
import { IUsersState } from 'src/app/store/states/users.state';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../store/models/product.model';
import { getUsersSelector } from '../../store/selectors/users.selector';

@Component({
  selector: 'mc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  unsubscriber$: Subject<void> = new Subject<void>();

  constructor(public productsService: ProductsService, private store: Store<{ users: IUsersState }>) {
    this.store
      .select(getUsersSelector)
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe(users => console.log('users: ', JSON.stringify(users)));

    this.store.dispatch(userActions.GetUsersAction());
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();

    console.log('[Home] - Destroy');
  }

  onDeleteCard(p: IProduct): void {
    this.productsService.delete(p);
  }

  onClickAddProduct(): void {
    this.productsService.add();
  }
}
