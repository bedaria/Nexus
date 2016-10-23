import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Todo } from './todo';

@Injectable()
export class TodoService {

  constructor(private http: Http) { }

  private todoUrl = '/api/admin/user/todos';

  getTodos(): Observable<Todo[]> {
    return this.http.get(this.todoUrl)
                    .map((res: Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addTodo(todo: string): Observable<Todo> {
    let body = JSON.stringify({ todo });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.todoUrl, body, options)
                    .map((res: Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  removeTodo(id: number): Observable<Todo> {
    return this.http.delete(`${this.todoUrl}/${id}`)
                    .map((res: Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
