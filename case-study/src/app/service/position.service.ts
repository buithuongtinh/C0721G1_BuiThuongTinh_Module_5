import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private API_URL = 'http://localhost:3000/position';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable< Position[] | any> {
    return this.http.get(this.API_URL);
  }
}
