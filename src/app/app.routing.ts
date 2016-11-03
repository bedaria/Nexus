import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { TodoListComponent } from "./dashboard/todo-list/todo-list.component";
import { SpreadsheetComponent } from "./pages/spreadsheet/spreadsheet.component";

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: TodoListComponent},
  { path: 'spreadsheet', component: SpreadsheetComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
