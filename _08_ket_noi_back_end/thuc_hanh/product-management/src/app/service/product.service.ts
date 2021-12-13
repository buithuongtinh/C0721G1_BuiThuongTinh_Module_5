import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = 'http://localhost:3000/products';
  products: Product[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL);
  }

  saveProduct(product) {
    return this.httpClient.post<Product>(this.API_URL, product);
  }
  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL + '/' + id);
  }

  updateProduct(id: number, product: Product) {
    return this.httpClient.patch<Product>(this.API_URL + '/' + id, product);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete<Product>(this.API_URL + '/' + id);
  }

}
