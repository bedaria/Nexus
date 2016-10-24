import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './todo-list.component.html',
  styles: [require('./todo-list.scss')],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {

  mode = 'Observable';
  todos: Todo[];
  public newTodoText: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos()
      .subscribe(
        todos => this.todos = todos,
        error => console.log(error)
      );
  }

  addTodo($event) {
    if (!this.newTodoText) { return; }
    this.todoService.addTodo(this.newTodoText)
      .subscribe(
        todo => this.todos.push(todo),
        error => console.log(error)
      );
    this.newTodoText = '';
    this.todoService.getTodos();
  }

  removeTodo(id: number): void {
    this.todoService.removeTodo(id)
      .subscribe(
        todo => this.todos = this.todos.filter(t => t.id !== id),
        error => console.log(error)
      );
    this.todoService.getTodos();
  }

}
