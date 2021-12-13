import {Component, OnInit} from '@angular/core';
import {FormControl, } from '@angular/forms';
import {TodoService} from "../todo.service";
import {Todo} from "../todo";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
  id = 1;

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.getAll().subscribe((next) => {
      this.todos = next;
    });
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo= {
        content: value,
        complete: false
      };
      this.todoService.createWord(todo).subscribe((next) => console.log(next));
      this.ngOnInit();
      this.content.reset();
    }
  }

  toggleTodo(value: number) {
    this.todos[value].complete = !this.todos[value].complete;
  }


  onDelete(item: Todo) {
    this.todoService.deleteWord(item).subscribe((next) => {
      console.log(next);
      this.ngOnInit();
    });
  }

  onEdit(item: Todo) {
    console.log('aaa' + item);
  }
}
