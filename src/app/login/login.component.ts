import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private error: String = null;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(loginDetails :any) {
    this.error = null;

    this.userService.login(loginDetails).subscribe((result) => {
      this.router.navigate(['/']);
    }, (err) => {
        this.error = err;
    });
  }
}
