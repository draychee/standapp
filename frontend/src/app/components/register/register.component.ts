import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ApiService]
})
export class RegisterComponent implements OnInit {
  register;

  constructor(private userService: ApiService  ) {

  }

  ngOnInit() {
    this.register = {
      username: '',
      password: '',
      email: '',
    };
  }
  registerUser() {
    this.userService.registerNewUser(this.register).subscribe(
      response => {
        alert('User ' + this.register.username + ' has been created!')
      },
      error => console.log(error)
    );
  }
}
