import { Component } from '@angular/core';
import { Iproducts } from 'src/app/models/iproducts';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.scss']
})
export class ProductMainComponent {
  filterlist: number = 0;
  // filter: string = '';
  newProduct:Iproducts[] =[];
  Quantity:any []=[] ;
recieveProduct(value: Iproducts[]): void {
// console.log(value);
this.newProduct=value;
// console.log(value);
}
recieveQuantity(value:any[]){
  // console.log(value);
this.Quantity=value;
}
quantityNumber(e:Iproducts):number{
  // console.log(this.Quantity)
  let x = 0;
  this.Quantity.map(i=>{
    if(i.Id==e.ID){
     x= i.Quantity;
  }
  }
  )
  // console.log(x);
return x
}

}
