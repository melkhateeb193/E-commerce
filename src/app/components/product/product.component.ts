import { Component, Input, OnChanges, OnInit, EventEmitter, SimpleChanges, Output } from '@angular/core';
import { Store } from 'src/app/models/store';
import { DiscountOffers } from 'src/app/models/discount-offers'
import { Iproducts } from 'src/app/models/iproducts'
import { Icategory } from 'src/app/models/icategory'
import { AddCart } from 'src/app/models/add-cart'
import { ProductsServiceService } from 'src/app/services/products-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {
  ClientName = "Mostafa!";
  //stores
  store: Store = new Store("ADIDAS", ["Cairo", "Giza", "Alexanderia"], "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?w=740&t=st=1683776488~exp=1683777088~hmac=5d01d8f477d0a90584d9ae2ab778a76d93a8a0a500fb260d1dd94e36d20ecb6b");
  // category
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
  ]
  iQuantity: AddCart[] = []
  //product storage
  constructor(private prdservce:ProductsServiceService , private router:Router) {
    // instialize
    // this.productList = [
    //   {
    //     ID: 1,
    //     Name: 'Wilma 6-Seater Glass Dining Table',
    //     price: 21500,
    //     Quantity: 2,
    //     Material: 'Glass',
    //     category: this.category[1],
    //     Img:
    //       'https://media.homecentre.com/i/homecentre/162104521-162104521-HC171219_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     ispurchased: false,
    //     discount: DiscountOffers.ten,
    //   },
    //   {
    //     ID: 2,
    //     Name: 'Trixia 4-Seater Glass Top Dining Table',
    //     price: 30000,
    //     Quantity: 8,
    //     Img:
    //       'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     category: this.category[1],
    //     Material: 'Metal',
    //     ispurchased: false,
    //     discount: DiscountOffers.fiften,
    //   },
    //   {
    //     ID: 3,
    //     Name: 'Gasha Marble Top Side Table',
    //     price: 14000,
    //     Quantity: 10,
    //     Img:
    //       'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     category: this.category[1],
    //     Material: 'Metal',
    //     ispurchased: false,
    //     discount: DiscountOffers.none,
    //   },
    //   {
    //     ID: 4,
    //     Name: 'Ventura Fabric Dining Chair',
    //     price: 1500,
    //     Quantity: 0,
    //     Img:
    //       'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     category: this.category[1],
    //     Material: 'Upholstered Seating',
    //     discount: DiscountOffers.ten,
    //     ispurchased: false,
    //   },
    //   {
    //     ID: 5,
    //     Name: 'Ventura Fabric Dining Chair',
    //     price: 1500,
    //     Quantity: 2,
    //     Img:
    //       'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     category: this.category[1],
    //     Material: 'Upholstered Seating',
    //     discount: DiscountOffers.fiften,
    //     ispurchased: false,
    //   },
    //   {
    //     ID: 6,
    //     Name: 'Boston Study Chair',
    //     price: 1000,
    //     Quantity: 10,
    //     Img:
    //       'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     category: this.category[1],
    //     Material: 'Upholstered Seating',
    //     discount: DiscountOffers.none,
    //     ispurchased: false,
    //   },
    //   {
    //     ID: 7,
    //     Name: 'Coby Extendable TV Unit',
    //     price: 13000,
    //     Quantity: 0,
    //     Img:
    //       'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     category: this.category[1],
    //     Material: 'Wood',
    //     discount: DiscountOffers.none,
    //     ispurchased: false,
    //   },
    //   {
    //     ID: 8,
    //     Name: 'Accent TV Unit',
    //     price: 36999,
    //     Quantity: 4,
    //     Img:
    //       'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     category: this.category[1],
    //     Material: 'MDF',
    //     discount: DiscountOffers.ten,
    //     ispurchased: false,
    //   },
    //   {
    //     ID: 9,
    //     Name: 'Plymouth TV Unit',
    //     price: 36999,
    //     Quantity: 3,
    //     Img:
    //       'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     category: this.category[0],
    //     Material: 'wood',
    //     discount: DiscountOffers.fiften,
    //     ispurchased: false,
    //   },
    // ]
  }


  addtoCart: Iproducts[] = [];
  // product list array
  // productList: Iproducts[];
  //filter to get value with name
  // private _listFilter: string = '';

  // filterByName: Iproducts[] = [];
  // @Input() get filterInChild(): string {
  //   return this._listFilter;
  // }
  // set filterInChild(value: string) {
  //   this._listFilter = value;
  //   this.filterByName = this.filterFuncName(value);
  // }

  //filtter by number
  private _listFilterNum: number = 0;
  filteredlist: Iproducts[] = [];
  @Input() get filterInChild2(): number {
    return this._listFilterNum;
  }
  set filterInChild2(value: number) {
    this._listFilterNum = value;
    // console.log("In setter",value);
    // console.log( this.FilterFuncNum(value))
    this.filteredlist = this.FilterFuncNum(value)
    // console.log(this.filteredlist)
  }
  //-----------------------

  // productList: Iproducts[];
  // private _listFilter: string = '';
  // private _listFilterNum: number = 0;
  // filterByName: Iproducts[] = [];
  // filterByNum: Iproducts[] = [];
  // // get =>
  // @Input() get filterInChild(): { filter: string, filterNum: number } {
  //   return { filter: this._listFilter, filterNum: this._listFilterNum };
  // }
  // set filterInChild(value: { filter: string, filterNum: number }) {
  //   this._listFilter = value.filter;
  //   this._listFilterNum = value.filterNum;
  //   this.filterByName = this.filterFuncName(value.filter);
  //   this.filterByNum = this.FilterFuncNum(value.filterNum);
  // }

  ///

  //cardNumber

  cardNumber: string = '1234567890123456';


  // filter
  // listFilter:string = '';

  // hide div
  hideDiv: boolean = true;
  // functions
  //hideFunction:
  hideFuncDiv() {
    this.hideDiv = !this.hideDiv;
    console.log(this.hideDiv);
  }
  //filterfunctions:
  // filterFuncName(filter: string): Iproducts[] {
  //   filter = filter.toLocaleLowerCase();
  //   return this.productList.filter((product: Iproducts) => product.Name.toLocaleLowerCase().includes(filter));
  // }

  // filter by Number
  FilterFuncNum(filter: number): Iproducts[] {
    // return this.productList.filter((product: Iproducts) => product.price <= filter);
    if (filter == 0 || filter == null) {
      return this.prdservce.productList;

    }
    return this.prdservce.productList.filter(p => p.price <= filter);
  }
  // switch case for the stock
  InStock(Items: Iproducts): string {
    switch (Items.Quantity) {
      case 0: { return "out of stock"; }
      case 1: { return "Last 1 in stock"; }
      case 2: { return "Last 2 in stock"; }
      default: { return "In stock"; }
    }
  }
  //to show all product before filter
  ngOnInit(): void {
    // this.filterByName = this.productList
    this.filteredlist = this.prdservce.productList
  }

  /// count down the Quantity
  buy(Items: Iproducts) {
    Items.ispurchased = true;
    Items.Quantity--;
    console.log(Items.Quantity);
  }
  // drop down func
  dropDown: string = 'Categorys';
  choose(category: Icategory) {
    // this.filterByName = this.productList.filter(item => item.category == category);
    this.dropDown = category.Name
  }
  @Output() eventSendQuantity: EventEmitter<AddCart[]> = new EventEmitter<AddCart[]>();
  @Output() eventSendItem: EventEmitter<Iproducts[]> = new EventEmitter<Iproducts[]>();
  onAddToCart(item: Iproducts) {
    if (this.addtoCart.includes(item)) {
      this.iQuantity.map(i => {
        if (item.ID === i.Id)
        {
          i.Quantity++
        }
      })
    } else {
      this.addtoCart.push(item);
      let obj = {
        Id: item.ID,
        Quantity: 1
      }
      this.iQuantity.push(obj)
    }
this.eventSendQuantity.emit(this.iQuantity)
this.eventSendItem.emit(this.addtoCart)
  }
  // on change
  ngOnChanges(): void {
    this.filterInChild2;
  }
  prdDetails(prodId :number) {
  this.router.navigate(['/prdDetails',prodId])
  // console.log(prodId);
  }
}
