import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';
import { UsersService } from '../../services/users.service';
import { IProduct } from '../../store/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  unsubscriber$: Subject<void> = new Subject<void>();

  constructor(public productsService: ProductsService, public usersService: UsersService) {
    this.usersService.users$
      .pipe(
        tap(console.log),
        takeUntil(this.unsubscriber$)
      )
      .subscribe();
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    console.log('[Home] - Destroy');
  }

  onDeleteCard(p: IProduct): void {
    this.productsService.delete(p);
  }
}
