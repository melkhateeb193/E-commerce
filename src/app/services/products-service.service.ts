import { Injectable } from '@angular/core';
import { Iproducts } from '../models/iproducts';
import { DiscountOffers } from 'src/app/models/discount-offers'
import { Icategory } from '../models/icategory';


@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  productList: Iproducts[];
  // category: Icategory[] = [];
  category: Icategory[] = [{
    Name: "Electorines",
    ID: 300
  },
  {
    Name: "Home's Items",
    ID: 400
  },
  {
    Name: "Mobile Phones",
    ID: 500
  }
  ];
  constructor() {
    // this.category = [{
    //     Name: "Electorines",
    //     ID: 300
    //   },
    //   {
    //     Name: "Home's Items",
    //     ID: 400
    //   },
    //   {
    //     Name: "Mobile Phones",
    //     ID: 500
    //   }
    //   ]
    this.productList = [
      {
        ID: 1,
        Name: 'Wilma 6-Seater Glass Dining Table',
        price: 21500,
        Quantity: 2,
        Material: 'Glass',
        category: this.category[1],
        Img:
          'https://media.homecentre.com/i/homecentre/162104521-162104521-HC171219_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        ispurchased: false,
        discount: DiscountOffers.ten,
      },
      {
        ID: 2,
        Name: 'Trixia 4-Seater Glass Top Dining Table',
        price: 30000,
        Quantity: 8,
        Img:
          'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: this.category[1],
        Material: 'Metal',
        ispurchased: false,
        discount: DiscountOffers.fiften,
      },
      {
        ID: 3,
        Name: 'Gasha Marble Top Side Table',
        price: 14000,
        Quantity: 10,
        Img:
          'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: this.category[1],
        Material: 'Metal',
        ispurchased: false,
        discount: DiscountOffers.none,
      },
      {
        ID: 4,
        Name: 'Ventura Fabric Dining Chair',
        price: 1500,
        Quantity: 0,
        Img:
          'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: this.category[1],
        Material: 'Upholstered Seating',
        discount: DiscountOffers.ten,
        ispurchased: false,
      },
      {
        ID: 5,
        Name: 'Ventura Fabric Dining Chair',
        price: 1500,
        Quantity: 2,
        Img:
          'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: this.category[1],
        Material: 'Upholstered Seating',
        discount: DiscountOffers.fiften,
        ispurchased: false,
      },
      {
        ID: 6,
        Name: 'Boston Study Chair',
        price: 1000,
        Quantity: 10,
        Img:
          'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: this.category[1],
        Material: 'Upholstered Seating',
        discount: DiscountOffers.none,
        ispurchased: false,
      },
      {
        ID: 7,
        Name: 'Coby Extendable TV Unit',
        price: 13000,
        Quantity: 0,
        Img:
          'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: this.category[1],
        Material: 'Wood',
        discount: DiscountOffers.none,
        ispurchased: false,
      },
      {
        ID: 8,
        Name: 'Accent TV Unit',
        price: 36999,
        Quantity: 4,
        Img:
          'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: this.category[1],
        Material: 'MDF',
        discount: DiscountOffers.ten,
        ispurchased: false,
      },
      {
        ID: 9,
        Name: 'Plymouth TV Unit',
        price: 36999,
        Quantity: 3,
        Img:
          'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        category: this.category[0],
        Material: 'wood',
        discount: DiscountOffers.fiften,
        ispurchased: false,
      },
    ]
    // this.category = [{
    //     Name: "Electorines",
    //     ID: 300
    //   },
    //   {
    //     Name: "Home's Items",
    //     ID: 400
    //   },
    //   {
    //     Name: "Mobile Phones",
    //     ID: 500
    //   }
    //   ]
  }

getAllprods(): Iproducts[]{
return this.productList;
}
  FilterFuncNum(filter: number): Iproducts[] {
      // return this.productList.filter((product: Iproducts) => product.price <= filter);
      if (filter == 0 || filter == null) {
        return this.productList;

      }
      return this.productList.filter(p => p.price <= filter);
    }
}
