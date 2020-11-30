import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import ProductActions from '../store/actions/product.actions';
import { IProduct } from '../store/models/product.model';
import * as ProductSelectors from '../store/selectors/product.selector';
import { IAppState } from '../store/states/app.state';
import { IProductsState } from '../store/states/products.state';

const DELAY_CONST = 2000;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient, private store: Store<IAppState>) {
    this.request();
  }

  request(): void {
    this.store.dispatch(ProductActions.SetLoadingProductsAction());

    this.http.get(`${this.url}/products`)
      .pipe(
        delay(DELAY_CONST)
      )
      .subscribe((products: IProduct[]) => this.store.dispatch(ProductActions.SetProductsAction({ items: products, isLoading: false })));
  }

  get products$(): Observable<IProductsState> {
    return this.store.select(ProductSelectors.getProductsSelector);
  }

  delete({ id }: IProduct): void {
    this.store.dispatch(ProductActions.DeleteProductAction({ id }));
  }
}
