import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/components/artist/artist-list-item/artist-list-item.component';
import { TestDataService } from 'src/app/test-data.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  newestSongs = [];

  constructor(public testDataService: TestDataService) { }

  ngOnInit(): void {

    this.testDataService.newestSongs.subscribe(songs => {
      const used = [];
      let index = this.gen(songs.length);
      for (let i = 0;  i < 8; i++) {
        while (true) {
          let isUsed = false;
          index = this.gen(songs.length);
          used.forEach(oldI => {
            if (oldI === index) {
              isUsed = true;
            }
          });
          if (!isUsed) {
            break;
          }
        }
        this.newestSongs.push(songs[index]);
        used.push(index);
      }
      console.log(used);
    });

  }

  gen(i: number) {
    return Math.trunc(Math.random() * i - 0.5);
  }

}
