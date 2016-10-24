import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
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
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
