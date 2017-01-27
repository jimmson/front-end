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

}
