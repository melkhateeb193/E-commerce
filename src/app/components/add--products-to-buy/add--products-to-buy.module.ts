import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
{path:'',redirectTo:'cart',pathMatch:'full'},
{path: 'add-to-cart',component: AddToCartComponent,title: 'Add to cart page'}
];
@NgModule({
  declarations: [
    AddToCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddProductsToBuyModule { }
