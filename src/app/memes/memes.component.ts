import { Component, OnInit } from '@angular/core';
import { MemeService } from '../services/meme.service';

import { Meme } from '../models/meme';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {

  private memes: Meme[];

  constructor(private memeService: MemeService) { }

  ngOnInit() {
    this.memeService.getMemes().subscribe((memes) => {
      this.memes = memes;
    })
  }

  getShareURL(id) {
    //return ["http://localhost:4200/meme", id].join("/");
    return "https://alltechgyaan.wordpress.com/2016/10/25/angular2-social-sharing/";
  }
}
