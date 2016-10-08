import { Component } from '@angular/core';
import * as io from 'socket.io-client';
export class Notification {
  message: string = '';
  cohort: string = '';
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class NotificationComponent {

  notification: Notification = new Notification();
  showNotification = false;
  socket = io('http://localhost:3000');

  receiveNotification = () => {
    this.socket.on('notification', (notification) => {
      console.log("received: ", notification);
      this.notification.message = notification.message
      this.showNotification = true;
      this.notification.cohort = notification.cohort;
    })
    setTimeout(()=> this.showNotification = false, 10000);
  }
}
