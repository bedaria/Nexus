import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  user = {
    firstName: "Max",
    lastName: "Payne",
    cohort: 5,
    username: 'Max',
    email: 'chris@test.com',
    password: 'test',
    profilePic: '',
    bio: ''
  }

  onSubmit(form:NgForm){
    console.log(form.value);
  }
}
