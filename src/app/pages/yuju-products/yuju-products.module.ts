import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YujuProductsComponent } from './yuju-products.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'products',
    component: YujuProductsComponent,
  }
];

@NgModule({
  entryComponents: [ProductComponent],
  declarations: [YujuProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    RouterModule.forChild(routes)
  ]
})
export class YujuProductsModule { }
