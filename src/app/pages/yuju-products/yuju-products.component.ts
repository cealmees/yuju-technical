import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { merge } from 'rxjs';
import { IProduct } from '@core/interfaces';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { YujuProductsDB } from './yuju-products.service';
import { HttpClient } from '@angular/common/http';
import { startWith, switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-yuju-products',
  templateUrl: './yuju-products.component.html',
  styleUrls: ['./yuju-products.component.scss']
})
export class YujuProductsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public resultsLength = 0;

  public shopDB: YujuProductsDB;

  public columns: string[] = ['pk', 'name', 'brand', 'price', 'stock', 'view'];

  public products: IProduct[];

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    const shopId = this.route.snapshot.params['id'];
    this.shopDB = new YujuProductsDB(shopId, httpClient);
  }

  public async ngAfterViewInit(): Promise<void> {
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => this.shopDB.getProducts(this.paginator.pageIndex))
      )
      .subscribe((data) => this.products = data);
  }

  public fullProductDescription(data: IProduct): void {
    this.dialog.open(ProductComponent, { data });
  }

}
