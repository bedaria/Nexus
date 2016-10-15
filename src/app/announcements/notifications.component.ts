import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [MessageService]
})

export class NotificationComponent {
  notifications: Message[] = [];
  constructor(private messageService: MessageService) {};

  ngOnInit(): void {
    let callback = (data) => (this.notifications.push(data));
    this.messageService.receiveAnnouncement(callback);
    this.addInterval()
  }

  addInterval(): void {
    setInterval(() => {
      if(this.notifications.length)
        this.notifications.shift()
    }, 2500)
  }

}
