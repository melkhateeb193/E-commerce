import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproducts } from 'src/app/models/iproducts';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  prodId:number = 0;
  // product!:Iproducts; //  ! non null asseertion operator
  // product:Iproducts = {} as Iproducts;
  product:Iproducts | undefined = undefined;
  // product:Iproducts |null = null;
// return IDS
productIDsArr:number[] = [];

//
returnedCurrentIndex:number = 0;
constructor(private productService: ProductsServiceService,private activatedroute: ActivatedRoute ,private router:Router ){

}
  ngOnInit(): void {
//  this.prodId = (this.activatedroute.snapshot.paramMap.get('productID'))?Number(this.activatedroute.snapshot.paramMap.get('productID')):0;
//  console.log(this.prodId);
// this.product = this.productService.getProductById(this.prodId);
// console.log(this.product)
this.productIDsArr = this.productService.getIDsOfProducts();
console.log(this.productIDsArr[0]);
this.activatedroute.paramMap.subscribe(params => {
this.prodId=(params.get('productID'))?Number(params.get('productID')) : 0;

let reasultofFun = this.productService.getProductById(this.prodId);
if (reasultofFun){
this.product = reasultofFun;
} else {
  alert('Product not found');
}
});

  }
  BackToHome(){
    this.router.navigate(['Products'])
  }

  prevFunc() {
 this.returnedCurrentIndex = this.productIDsArr.findIndex(prd=>prd==this.prodId)
//  console.log(this.returnedCurrentIndex);
    this.router.navigate(['/prdDetails',this.productIDsArr[--this.returnedCurrentIndex]])
  }
  nextFunc(){
    this.returnedCurrentIndex = this.productIDsArr.findIndex(prd=>prd==this.prodId)
    //  console.log(this.returnedCurrentIndex);
        this.router.navigate(['/prdDetails',this.productIDsArr[++this.returnedCurrentIndex]])
  }
}
