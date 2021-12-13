import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private API_URL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Employee[] | any> {
    return this.http.get(this.API_URL);
  }

  createNew(object: Employee): Observable<Employee | any> {
    return this.http.post(this.API_URL, object);
  }

  findById(id: number): Observable<Employee | any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  edit(id: number, object: Employee): Observable<Employee | any> {
    return this.http.patch(`${this.API_URL}/${id}`, object);
  }

  delete(id: number): Observable<Employee | any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
