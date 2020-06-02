import { TestDataService } from './../../test-data.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  newestSongs = [];
  newestAlbums = [];
  newestAlbumsCardData = [];

  constructor(private testDataService: TestDataService) { }

  ngOnInit(): void {


    // TODO API CALL TO GET LATEST RELEASED ALBUMS (8 NEWEST)
    this.testDataService.newestAlbumCards.subscribe(albums => this.newestAlbums = albums);
    this.newestAlbums.forEach(album => {
      this.newestAlbumsCardData.push(
        {
          imgSrc: album.albumCover,
          title: album.albumName,
          subtitle: album.albumYear,
          dataType: 'album',
          dataID: album.albumName
        }
      );
    });

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
  }

  gen(i: number) {
    return Math.trunc(Math.random() * i - 0.5);
  }

}
