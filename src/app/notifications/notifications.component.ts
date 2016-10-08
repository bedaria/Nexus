import { Component } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class NotificationComponent {
  notification = '';
  showNotification = false;
  cohort = '';
  socket = io('http://localhost:3000');

  receiveNotification = () => {
    this.socket.on('notification', (notification) => {
      this.notification = notification.message
      this.showNotification = true;
      this.cohort = notification.cohort;
    })
    setTimeout(()=> this.showNotification = false, 10000);
  }
}
