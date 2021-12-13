import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {EducationDegree} from '../model/education-degree';

@Injectable({
  providedIn: 'root'
})
export class EducationDegreeService {

  private API_URL = 'http://localhost:3000/eduDegree';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<EducationDegree[] | any> {
    return this.http.get(this.API_URL);
  }
}
