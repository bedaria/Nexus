import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UserService } from "../../user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [`
    .ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class SignupComponent {
  constructor(private userService: UserService) {}

  user = {
    firstName: "Max",
    lastName: "Payne",
    cohort: 5,
    username: 'Max',
    email: 'chris@test.com',
    password: 'test',
    profilePic: 'adhadgas.jpg',
    bio: 'Born in the mountains; Raised in the concrete jungle'
  };

  onSubmit(form:NgForm){
    var data = {
      username: form.value.userData.username,
      email: form.value.userData.email,
      password: form.value.userData.password,
      firstName:form.value.userData.firstName,
      lastName:form.value.userData.lastName,
      cohort: form.value.userData.cohort,
      profilePic: form.value.userData.profilePic,
      bio: form.value.userData.bio
    };

    this.userService.storeUserData(data).subscribe(
      data => console.log(data),
      error => console.log(error)
    );

    //.then()
    //redirect to "/" page
  }

}
