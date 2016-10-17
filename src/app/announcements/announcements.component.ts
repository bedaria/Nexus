import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
  providers: [MessageService]
})

export class AnnouncementsComponent {
  announcementInfo: Message = new Message;
  cohorts = ['Juniors', 'Seniors'];

  constructor(private messageService: MessageService) {};

  submitAnnouncement(): void {
    this.messageService.saveAnnouncement(this.announcementInfo);
    this.messageService.submitAnnouncement(this.announcementInfo);
  }
}
