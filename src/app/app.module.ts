import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { NotificationComponent } from './announcements/notifications.component';
import { UnseenAnnouncementsComponent } from './announcements/unseenAnnouncements.component';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    AnnouncementsComponent,
    NotificationComponent,
    UnseenAnnouncementsComponent,
    LoginComponent,
    TodoListComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
