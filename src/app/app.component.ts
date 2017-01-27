import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './services/user.service';
import { MemeService } from './services/meme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private userService: UserService,
    private memeService: MemeService,
    private router : Router
  ) {}

  addMeme() {
    this.router.navigate(['/meme-add']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
		this.userService.logout();
	}

	register() {
		this.router.navigate(['/register']);
	}

}
