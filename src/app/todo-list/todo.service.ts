import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {
  // Placeholder for last id to simulate automatic incrementing of id's
  lastId: number = 0;

  // Temporarily store todo's in memory
  todos: Todo[] = [];

  constructor() { }

  // Temporary placeholder for POST /api/users/:userId/todos
  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Temporary placeholder for GET /api/users/:userId/todos
  getAllTodos(): Todo[] {
    return this.todos;
  }
}
