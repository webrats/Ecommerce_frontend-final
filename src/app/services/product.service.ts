import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:8080/api/products/load"
  constructor(private httpClient: HttpClient ) { }


  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.url}`);
  }
  
}
