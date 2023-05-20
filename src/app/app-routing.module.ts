import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductMainComponent } from './components/product-main/product-main.component';
import { ProductComponent } from './components/product/product.component';
import { NotFoundComponent } from './components/notFoundPage/not-found/not-found.component';
import { HomePageComponent } from './components/home-page/home-page/home-page.component';
import { ContactUsComponent } from './components/ContactUs/contact-us/contact-us.component';
import { AboutUsComponent } from './components/AboutUs/about-us/about-us.component';
import { GroupOfOutesComponent } from './components/group-routes/group-of-outes/group-of-outes.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {path:'', redirectTo:"",pathMatch:'full' }, // default path
  {path: 'Home', component:HomePageComponent,title: 'Home Page'},
  {path: 'Products', component:ProductMainComponent,title: 'Products'},
  {path: 'contactUs', component:ContactUsComponent,title: 'contactUs'},
  {path: 'aboutus', component:AboutUsComponent,title: 'aboutus'},
  {
    path: 'buy',
    loadChildren: () => import('src/app/components/add--products-to-buy/add--products-to-buy.module').then(m => m.AddProductsToBuyModule)
  },
  {
    path: 'User',
    loadChildren: () => import('src/app/components/user/user.module').then(m => m.UserModule)
  },
  {path:'prdDetails/:productID',component:ProductDetailsComponent,title:"product details page"},
  {path:'**',component:NotFoundComponent,title: 'NOt found page'} // wild card path

//   {path:'group',component:GroupOfOutesComponent,children:[
//   {path:'', redirectTo:"",pathMatch:'full' }, // default path
//   {path: 'Home', component:HomePageComponent,title: "Home Page"},
//   {path: 'Products', component:ProductMainComponent,title: "Products"},
//   {path: 'contactUs', component:ContactUsComponent,title: "contactUs"},
//   {path: 'aboutus', component:AboutUsComponent,title: "aboutus"}
// ]},
// {path:'**',component:NotFoundComponent,title: "NOt found page"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
