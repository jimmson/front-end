import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MemeService } from '../services/meme.service';

import { Meme } from '../models/meme';

@Component({
  selector: 'app-meme-detail',
  templateUrl: './meme-detail.component.html',
  styleUrls: ['./meme-detail.component.css']
})
export class MemeDetailComponent implements OnInit {

  private meme: Meme;

  constructor(
    private activatedRoute: ActivatedRoute,
    private memeService: MemeService
  ) {}

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      this.memeService.getMeme(id).subscribe((meme) => {
        console.log(meme);
        this.meme = meme;
      })
    });
  }

}
