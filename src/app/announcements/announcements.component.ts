import { Component } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.html'
})

export class AnnouncementsComponent {
  announcement = '';
  incoming = '';
  socket = io('http://localhost:3000');



  submitAnnouncement = (msg) => {
    this.socket.emit('announce', msg)
    this.socket.on('a', (msg) => {
      console.log("msg: ", msg)
      this.incoming = msg
    })

    return false
  }
}
