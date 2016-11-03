import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpreadsheetService {
  constructor(private http: Http) {}

  saveTable(tableData): Observable<String> {
    return this.http.post('/api/admin/table', tableData)
      .map((r: Response) => r.json())
      .catch((error: any) => Observable.throw(error.json().error || "server error"))
  }
}
