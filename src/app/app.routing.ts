import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import {TodoListComponent} from "./todo-list/todo-list.component";

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: TodoListComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
