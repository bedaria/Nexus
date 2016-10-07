import { Component } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.html'
})

export class AnnouncementsComponent {
  announcement = '';
  mamsg = '';

  submitAnnouncement = (msg) => {
    this.mamsg = msg;
  }
}
