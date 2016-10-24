import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UserService } from "../../user.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: [`
    .ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class LoginComponent {
  user = {
    username: 'Max',
    email: 'chris@test.com',
    password: 'test',
  };

  constructor(private userService: UserService) {}

  onSubmit(form:NgForm){
    var data = {
        username: form.value.userData.username,
        email: form.value.userData.email,
        password: form.value.userData.password,
      };
    this.userService.fetchUserData(data).subscribe(
      data => console.log(data),
      error => console.log(error)
    );

  }
}
