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

}
