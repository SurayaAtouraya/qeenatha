import { TestDataService } from './../../test-data.service';
import { Component, OnInit } from '@angular/core';
import { WindowService } from 'src/app/window.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public windowService: WindowService, public testDataService: TestDataService) { }

  newestAlbums = [];
  newestSongs = [];
  newestArtists = [];

  cols: number;

  ngOnInit(): void {

    this.windowService.sideCols.subscribe(cols => this.cols = cols);

    // TODO API CALL TO GET LATEST RELEASED ALBUMS (8 NEWEST)
    this.testDataService.newestAlbumCards.subscribe(albums => this.newestAlbums = albums);

    // TODO API CALL TO GET 8 random songs of 8 released albums
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

    // TODO Get 8 random?/newewst? artists
    this.testDataService.newestArtists.subscribe(artists => {
      this.newestArtists = artists;
    });

  }

  // TEST DATA TEMP
  gen(i: number) {
    return Math.trunc(Math.random() * i - 0.5);
  }

}
