import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../moudel/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  url: string = '/assets/json/menu.json'

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url)
  }
}

