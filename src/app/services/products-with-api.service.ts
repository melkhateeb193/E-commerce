import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts } from '../models/iproducts';
import { environment } from 'src/environments/environment.development';
import { Icategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {

  constructor(private httpclient:HttpClient) {
  }
    getAllproducts(): Observable<Iproducts[]> {
      // return this.httpclient.get<Iproducts[]>(' http://localhost:3000/products')
      return this.httpclient.get<Iproducts[]>(`${environment.APIURL}/products`)
    }
    getPrdByID(prodId:number):Observable<Iproducts> {
      return this.httpclient.get<Iproducts>(`${environment.APIURL}/products/${prodId}`)
    }
    getCategorybyID(catID:number):Observable<Icategory> {
      return this.httpclient.get<Icategory>(`${environment.APIURL}/category/${catID}`)
    }
    getCategory():Observable<Icategory[]> {
      return this.httpclient.get<Icategory[]>(`${environment.APIURL}/category`)
    }

  searchByPrdMaterials(mat:string):Observable<Iproducts[]> {
    return this.httpclient.get<Iproducts[]>(`${environment.APIURL}/products?Material=${mat}`)
  }
}
