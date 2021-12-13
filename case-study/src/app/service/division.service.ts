import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Division} from '../model/division';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  private API_URL = 'http://localhost:3000/division';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Division[] | any> {
    return this.http.get(this.API_URL);
  }
}
