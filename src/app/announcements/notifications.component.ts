import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [MessageService]
})

export class NotificationComponent {
  notification: Message = new Message;
  showNotification = false;

  constructor(private messageService: MessageService) {};

  receiveNotification(): void {
    let callback = (data) => {
      this.showNotification = true;
      this.notification = data
      setTimeout(() => (this.showNotification = false), 1000)
    }
    this.messageService.receiveNotification(callback);
  }
}
