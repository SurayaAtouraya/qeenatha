import { Component, OnInit, HostListener } from '@angular/core';
import { Song } from 'src/app/components/song/song-list-item/song-list-item.component';
import { TestDataService } from 'src/app/test-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  constructor(public testDataService: TestDataService, private router: Router) { }

  albums = [];
  songs = [];

  song: Song;
  song2: Song;
  song3: Song;
  song4: Song;
  song5: Song;

  cols: number;

  ngOnInit(): void {

    // TODO API CALL TO GET LATEST RELEASED ALBUMS (8 NEWEST)
    this.testDataService.newestAlbumCards.subscribe(albums => this.albums = albums);

    window.scrollTo(0, 0);

    this.initResize();

    this.testDataService.allSongs.subscribe(songs => {
      this.songs.push(songs.find(song => song.songName === 'B\' Yawinakh Khayee'));
      this.songs.push(songs.find(song => song.songName === 'Nora Aldyiana'));
      this.songs.push(songs.find(song => song.songName === 'Nahra d\'Gazarta'));
      this.songs.push(songs.find(song => song.songName === 'Shwoty'));
      this.songs.push(songs.find(song => song.songName === 'Gipta D\'Anwe'));
    });

  }

  goToAllSongs() {
    this.router.navigate(['songs', 'ARTISTIDHERE']);
  }

  @HostListener('window:resize', ['$event'])
  initResize(event?) {
    const screenWidth = window.innerWidth;
    if (screenWidth > 2000) {
      this.cols = 8;
    } else if (screenWidth <= 2000 && screenWidth > 1600) {
      this.cols = 6;
    } else if (screenWidth <= 1600 && screenWidth > 1200) {
      this.cols = 4;
    } else if (screenWidth <= 1200 && screenWidth > 900) {
      this.cols = 3;
    } else if (screenWidth <= 900 && screenWidth > 700) {
      this.cols = 2;
    } else if (screenWidth <= 700) {
      this.cols = 1;
    }
  }

  onResize(event) {
    console.log(event.target.innerWidth);

    if (event.target.innerWidth > 2000) {
      this.cols = 8;
    } else if (event.target.innerWidth <= 2000 && event.target.innerWidth > 1600) {
      this.cols = 6;
    } else if (event.target.innerWidth <= 1600 && event.target.innerWidth > 1200) {
      this.cols = 4;
    } else if (event.target.innerWidth <= 1200 && event.target.innerWidth > 900) {
      this.cols = 3;
    } else if (event.target.innerWidth <= 900 && event.target.innerWidth > 700) {
      this.cols = 2;
    } else if (event.target.innerWidth <= 700) {
      this.cols = 1;
    }
  }

}
