import { Component, OnInit } from '@angular/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  mode = 'Observable';

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

  addTodo(todo: string) {
    if (!todo) { return; }
    this.todoService.addTodo(todo)
      .subscribe(
        todo => this.todos.push(todo),
        error => console.log(error)
      );
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
