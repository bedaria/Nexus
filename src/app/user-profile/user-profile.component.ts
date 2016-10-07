import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent {
  myForm: FormGroup;

  constructor(){
    this.myForm = new FormGroup({
      'username': new FormControl('Max', Validators.required),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      'password': new FormControl('', Validators.required)
    });
  }
  onSubmit(){
    console.log(this.myForm);
  }
}
