import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message';

@Component({
  selector: 'app-unseenAnnouncements',
  templateUrl: './unseenAnnouncements.component.html',
  styleUrls: ['./unseenAnnouncements.component.css'],
  providers: [MessageService]
})

export class UnseenAnnouncementsComponent {
  announcements: Message[] = [];

  constructor(private messageService: MessageService) {}

  getAnnouncements(): void {
    this.messageService.getAnnouncements()
      .subscribe((data) => this.announcements = data)
  }
}
