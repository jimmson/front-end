import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Meme } from '../models/meme';

@Injectable()
export class MemeService {

  constructor(private http : Http) { }

  getMemes() {
    let url = "http://localhost:3000/memes";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .get(url, { headers })
      .map((res) => res.json().memes as Meme[]);
  }

  addMeme(meme: any) {
    let url = "http://localhost:3000/memes";
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
