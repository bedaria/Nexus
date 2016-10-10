import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import * as io from 'socket.io-client';
import { Message } from './message';

@Injectable()
export class MessageService {
  socket = io('http://localhost:3000');

  submitAnnouncement(announcementInfo): void {
    this.socket.emit('announce', announcementInfo);
  }

  receiveAnnouncement(callback) {
    this.socket.on('incomingAnnouncement', (notification) => {
      callback(notification);
    })
  }
}
