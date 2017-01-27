import { Component, OnInit } from '@angular/core';

import { MemeService } from '../services/meme.service';

@Component({
  selector: 'app-meme-add',
  templateUrl: './meme-add.component.html',
  styleUrls: ['./meme-add.component.css']
})
export class MemeAddComponent implements OnInit {

  private meme: any;

  constructor(
    private memeService: MemeService
  ) { }

  ngOnInit() {
  }

  onChange($event) {
      this.meme = $event.srcElement.files[0];
      console.log(this.meme);
  }

  addMeme(formData :any) {

    if (this.meme) {
      formData.meme = this.meme;
    }
    this.memeService.addMeme(formData).subscribe((meme) =>{
      console.log(meme);
    })
  }
}
