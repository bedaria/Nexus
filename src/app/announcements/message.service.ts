import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import * as io from 'socket.io-client';
import 'rxjs/add/operator/map';
import { Message } from './message';

@Injectable()
export class MessageService {
  socket = io('http://localhost:3000');
  constructor(private http: Http) {}

  saveAnnouncement(announcement: Message): Observable<Message> {
    console.log("requesting: .post('/api/admin/announcements')with ", announcement)
    return this.http.post('/api/admin/announcements', announcement)
    .map((r: Response) => r.json())
    .catch((error: any) => Observable.throw(error.json().error || "server error"));
  }

  submitAnnouncement(announcementInfo): void {
    this.socket.emit('announce', announcementInfo);
  }

  getAnnouncements(): Observable<Message[]> {
    return this.http
      .get('/api/admin/announcements')
      .map((r: Response) => r.json().announcements)
      .catch((error: any) => Observable.throw(error.json().error || "server error"));
  }

  receiveAnnouncement(callback) {
    this.socket.on('incomingAnnouncement', (notification) => {
      callback(notification);
    })
  }
}
