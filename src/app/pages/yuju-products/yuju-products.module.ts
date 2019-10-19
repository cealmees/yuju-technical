import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YujuProductsComponent } from './yuju-products.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    component: YujuProductsComponent,
  }
];

@NgModule({
  declarations: [YujuProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class YujuProductsModule { }
