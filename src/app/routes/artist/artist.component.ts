import { Component, OnInit, HostListener } from '@angular/core';
import { Song } from 'src/app/components/song/song-list-item/song-list-item.component';
import { TestDataService } from 'src/app/test-data.service';
import { Router } from '@angular/router';
import { HeaderData } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  constructor(public testDataService: TestDataService, private router: Router) { }

  albums = [];
  albumsCardData = [];
  songs = [];
  artistHeaderData: HeaderData;

  song: Song;
  song2: Song;
  song3: Song;
  song4: Song;
  song5: Song;

  cols: number;

  ngOnInit(): void {

    this.artistHeaderData = {
      imgSrc: 'https://www.qeenatha.com/qartistimg/1024/1024/0/0ec6d94_14photo.jpg',
      desc: 'Ashur Bet Sargis (Syriac: ܐܫܘܪ ܒܝܬ ܣܪܓܝܤ‎, born 2 July 1949) is an Assyrian singer, composer, guitarist and activist. He became famous in the Assyrian communities worldwide for his nationalistic songs in the 1970s. His career peaked, and became prominent, in the 1990s with five albums released within that decade. His songs usually tend to be sentimental ballads and anthems, although he has made a number of folk dance music as well. To the contrast of his Assyrian peers in music, Ashur\'s music is slow and mellow. He is also known for incorporating Greek musical instruments such as Tambouras to his music.',
      title: 'Ashur Bet Sargis',
      subtitle: 'Artist',
      subtitle2: '5 Albums',
      dataType: 'artist',
      dataID: 'Ashur Bet Sargis',
      chips: ['#1 Artist of All Time'],
      artistSubscribers: '2.7K'
    };

    // TODO API CALL TO GET LATEST RELEASED ALBUMS (8 NEWEST)
    this.testDataService.newestAlbumCards.subscribe(albums => {
      this.albums = albums;
    });
    this.albums.forEach(album => {
      this.albumsCardData.push(
        {
          imgSrc: album.albumCover,
          title: album.albumName,
          subtitle: album.albumYear,
          dataType: 'album',
          dataID: album.albumName
        }
      );
    });

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
