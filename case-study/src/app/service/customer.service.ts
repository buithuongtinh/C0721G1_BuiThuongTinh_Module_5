import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICustomer} from '../model/icustomer';
import {Icustomertype} from '../model/icustomertype';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private URL_CUSTOMER = 'http://localhost:3000/customerList';
  private URL_CUSTYPE = 'http://localhost:3000/customerTypes';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ICustomer[] | any> {
    return this.http.get(this.URL_CUSTOMER);
  }

  findById(id: number) {
    return this.http.get(this.URL_CUSTOMER + '/' + id);
  }

  createCustomer(customer: ICustomer) {
    return this.http.post(this.URL_CUSTOMER, customer);
  }

  edit(id: number, customer: ICustomer): Observable<ICustomer | any> {
    return this.http.patch(this.URL_CUSTOMER + '/'+id, customer);
  }

  delete(id: any): Observable<ICustomer | any> {
    return this.http.delete(this.URL_CUSTOMER + '/' + id);
  }

  getAllCustomerTypes(): Observable<Icustomertype[] | any> {
    return this.http.get(this.URL_CUSTYPE);
  }
}
