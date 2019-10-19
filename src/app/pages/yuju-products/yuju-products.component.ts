import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '@core/interfaces';
import { YujuProductsService } from './yuju-products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yuju-products',
  templateUrl: './yuju-products.component.html',
  styleUrls: ['./yuju-products.component.scss']
})
export class YujuProductsComponent implements OnInit {

  public products$: Observable<IProduct[]>;

  constructor(
    private route: ActivatedRoute,
    private productsService: YujuProductsService
    ) {
    const productId = this.route.snapshot.params['id'];
    console.log('Id', productId);
    this.products$ = this.productsService.getProducts(productId);
   }

  public ngOnInit() {
  }

}
