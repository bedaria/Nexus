import { Component } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})

export class AnnouncementsComponent {
  announcement = '';
  cohorts = ['seniors', 'juniors'];
  cohort = '';
  socket = io('http://localhost:3000');

  submitAnnouncement = () => {
    this.socket.emit('announce',
      { message: this.announcement,
        isNewNotification: true,
        cohort: this.cohort
      })
  }
}
