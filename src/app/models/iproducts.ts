import { DiscountOffers } from "./discount-offers";
import { Icategory } from "./icategory";
export interface Iproducts {
ID?:Number,
Name:string,
Quantity:number,
price:number,
Img:string,
Material:string,
discount:DiscountOffers,
ispurchased:boolean,
category:Icategory
}