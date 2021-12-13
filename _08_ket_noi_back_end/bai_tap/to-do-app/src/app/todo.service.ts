import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from "./todo";



@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private  URL_TODO = 'http://localhost:3000/todo';
  constructor(private http: HttpClient) { }
  getAll(): Observable<Todo[]| any>{
    return  this.http.get(this.URL_TODO);
  }
  createWord(word: Todo){
    return this.http.post(this.URL_TODO, word);
  }
  deleteWord(word: Todo){
    return this.http.delete(this.URL_TODO + '/' + word.id);
  }
  editWord(word: Todo){
    return this.http.put(this.URL_TODO + '/' + word.id, word);
  }

}
