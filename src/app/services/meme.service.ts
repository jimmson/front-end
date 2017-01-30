import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';

import {AppConfig} from '../app.config';

import { Meme } from '../models/meme';

@Injectable()
export class MemeService {

  constructor(
    private http : Http,
  ) { }

  getMemes() {
    let url = [AppConfig.API_ENDPOINT, "memes"].join("/");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .get(url, { headers })
      .map((res) => res.json().memes as Meme[]);
  }

  getMeme(id: String) {
    let url = [AppConfig.API_ENDPOINT, "memes", id].join("/");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .get(url, { headers })
      .map((res) => res.json().meme as Meme);
  }

  addMeme(meme: any) {
    let url = [AppConfig.API_ENDPOINT, "memes"].join("/");
    let headers = new Headers();
    let formData = new FormData();
    formData.append("file", meme.meme, meme.meme.name);
    formData.append("caption", meme.caption);
    headers.append('x-auth', localStorage.getItem('x-auth'));

    return this.http
      .post(url, formData, { headers })
      .map((res) => res.json());
  }
}
