import { TestDataService, Album } from './../../test-data.service';
import { Component, OnInit } from '@angular/core';
import { WindowService } from 'src/app/window.service';
import { Artist } from 'src/app/components/artist/artist-list-item/artist-list-item.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public windowService: WindowService, public testDataService: TestDataService) { }

  newestAlbums: Album[];
  newestAlbumsCardData = [];
  newestSongs = [];
  newestArtists: Artist[];
  newestArtistsCardData = [];

  cols: number;

  ngOnInit(): void {

    this.windowService.sideCols.subscribe(cols => this.cols = cols);

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

    // TODO Get 8 random?/newewst? artists
    this.testDataService.newestArtists.subscribe(artists => {
      this.newestArtists = artists;
    });
    this.newestArtists.forEach(artist => {
      this.newestArtistsCardData.push(
        {
          imgSrc: artist.artistCoverPhoto,
          title: artist.artistName,
          subtitle: artist.albumCount + ' Albums',
          dataType: 'artist',
          dataID: artist.artistName
        }
      );
    });

  }

  // TEST DATA TEMP
  gen(i: number) {
    return Math.trunc(Math.random() * i - 0.5);
  }

}
