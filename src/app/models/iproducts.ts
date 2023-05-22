import { DiscountOffers } from "./discount-offers";
import { Icategory } from "./icategory";
export interface Iproducts {
ID:number,
Name:string,
Quantity:number,
price:number,
Img:string,
Material:string,
discount:number,
ispurchased:boolean,
category:number,
details?:string;
}
