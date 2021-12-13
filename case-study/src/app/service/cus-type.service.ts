import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Icustomertype} from '../model/icustomertype';

@Injectable({
  providedIn: 'root'
})
export class CusTypeService {
  private URL_CUSTYPE = "http://localhost:3000/customerTypes";
  constructor(private http: HttpClient) { }
  getAll(): Observable<Icustomertype[] | any> {
    return  this.http.get(this.URL_CUSTYPE);
  }
}
