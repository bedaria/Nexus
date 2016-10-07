import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {
  // Used to keep track of todo items, automatically
  // incremented when addTodo is called
  lastId: number = 0;

  // Temporarily store todo's in memory
  todos: Todo[] = [];

  constructor() { }

  // POST /api/users/:userId/todos
  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // GET /api/users/:userId/todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // PUT /api/users/:userId/todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Mark todo items as complete
  toggleTodoComplete(todo: Todo) {
    console.log('Todo item is complete!');
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

  // DELETE /api/users/:userId/todos/:id
  deleteTodoById(id: number): TodoService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // GET /api/users/:userId/todos
  getAllTodos(): Todo[] {
    return this.todos;
  }
}
