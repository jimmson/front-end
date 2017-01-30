// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import {AppConfig} from '../app.config';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('x-auth');
  }

  register(user) {
    let url = [AppConfig.API_ENDPOINT, "users"].join("/");
    let body = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(url, body, { headers })
      .map((res) => {
        let payload = res.json();
        let authToken = res.headers.get("x-auth");

        if (authToken) {
          localStorage.setItem('x-auth', authToken);
          this.loggedIn = true;
          return payload;
        }
      })
      .catch((error) => {
        if (error.status === 400) {
          let body = JSON.parse(error._body);
          let {errors} = body;
          let {code} = body;

          if (errors) {
            if(errors.email){
              return Observable.throw(errors.email.message);
            } else if(errors.password) {
              console.log(errors.password);
              return Observable.throw(errors.password.message);
            }
          } else if (code) {
            if(code === 11000) {
              return Observable.throw('Email address already exists');
            }
          } else {
            return Observable.throw('Unexpected error occured');
          }
        } else {
          return Observable.throw('Server error');
        }
    });
  }


  login(loginDetails) {
    let url = [AppConfig.API_ENDPOINT, "users", "login"].join("/");
    let body = JSON.stringify(loginDetails);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(url, body, { headers })
      .map((res) => {
        let payload = res.json();
        let authToken = res.headers.get("x-auth");

        if (authToken) {
          localStorage.setItem('x-auth', authToken);
          this.loggedIn = true;
          return payload;
        }
      })
      .catch((error) => {
        if (error.status === 400) {
            return Observable.throw('Invalid login details');
        } else {
            return Observable.throw('Server error');
        };
    });
  }

  logout() {
    localStorage.removeItem('x-auth');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
