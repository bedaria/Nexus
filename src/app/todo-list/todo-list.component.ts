import { Component } from '@angular/core';
import {Todo} from './todo';
import {TodoService} from './todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService]
})
export class TodoListComponent {
  newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) { }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  get todos() {
    return this.todoService.getAllTodos();
  }
}
