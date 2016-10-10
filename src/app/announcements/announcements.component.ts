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
  announcement = '';
  cohort = '';
  cohorts = ['seniors', 'juniors'];

  constructor(private messageService: MessageService) {};

  submitAnnouncement(): void {
    event.preventDefault();
    this.announcementInfo.message = this.announcement;
    this.announcementInfo.cohort = this.cohort;
    this.messageService.submitAnnouncement(this.announcementInfo);
  }
}
