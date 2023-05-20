import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { StylesDivDirective } from './Directive/styles-div.directive';
import { CreditCardPipe } from './pipes/credit-card.pipe';
import { ProductMainComponent } from './components/product-main/product-main.component';
import { NotFoundComponent } from './components/notFoundPage/not-found/not-found.component';
import { GroupOfOutesComponent } from './components/group-routes/group-of-outes/group-of-outes.component';
import { HomePageComponent } from './components/home-page/home-page/home-page.component';
import { AboutUsComponent } from './components/AboutUs/about-us/about-us.component';
import { ContactUsComponent } from './components/ContactUs/contact-us/contact-us.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    StylesDivDirective,
    CreditCardPipe,
    ProductMainComponent,
    NotFoundComponent,
    GroupOfOutesComponent,
    HomePageComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
