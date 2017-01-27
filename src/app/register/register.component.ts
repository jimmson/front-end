import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private error: String = null;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register(userDetails : any) {
    if (userDetails.password != userDetails.repeatPassword) {
      this.error = 'Passwords do not match';
    } else {
      this.userService.register(userDetails).subscribe((user) => {
        this.router.navigate(['/']);
      }, (err) => {
        this.error = err;
      })
    }
  }
}
