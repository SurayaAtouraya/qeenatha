import { HeaderData } from './../../components/header/header.component';
import { TestDataService } from 'src/app/test-data.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { Song } from 'src/app/components/song/song-list-item/song-list-item.component';

@Component({
  selector: 'app-music-library',
  templateUrl: './music-library.component.html',
  styleUrls: ['./music-library.component.scss']
})
export class MusicLibraryComponent implements OnInit {

  playlists = [];
  likedSongs = [];
  subscribedArtists = [];
  savedAlbumsHeaderData: HeaderData;

  songCount: number;
  sideCols: number;

  song: Song;
  song2: Song;
  song3: Song;

  constructor(public testDataService: TestDataService) { }

  ngOnInit(): void {

    this.savedAlbumsHeaderData = {
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39',
      title: 'Saved Albums',
      subtitle: 'Find all of your saved albums here!',
      dataType: 'savedAlbums',
      dataID: 'savedAlbums',
    }

    this.testDataService.playlists.subscribe(playlists => {
      this.playlists = playlists;
    });

    this.testDataService.likedSongs.subscribe(songs => {
      this.likedSongs = songs;
    });

    this.testDataService.subscribedArtists.subscribe(artists => {
      this.subscribedArtists = artists;
    });

    this.initResize();

    this.songCount = 1;


    this.song = {
      songName: 'Bet Nahrain',
      artistID: 'A',
      artistName: 'Ashur Bet Sargis',
      albumID: 'A',
      albumName: 'Ashur Sings for Bet Nahrain',
      albumCover: 'string',
      songLength: '5:21',
      songNumber: '1'
    };

    this.song2 = {
      songName: 'Brata D\'Shamiram',
      artistID: 'A',
      artistName: 'Bet Sargis',
      albumID: 'A',
      albumName: 'Immortal Memories',
      albumCover: 'string',
      songLength: '6:50',
      songNumber: '2'
    };

    this.song3 = {
      songName: 'Nora Aldiyana ',
      artistID: 'A',
      artistName: 'Bet',
      albumID: 'A',
      albumName: 'Nora Aldiyana',
      albumCover: 'string',
      songLength: '3:55',
      songNumber: '3'
    };

  }

  @HostListener('window:resize', ['$event'])
  initResize(event?) {
    const screenWidth = window.innerWidth;
    if (screenWidth > 2000) {
      this.sideCols = 8;
    } else if (screenWidth <= 2000 && screenWidth > 1600) {
      this.sideCols = 6;
    } else if (screenWidth <= 1600 && screenWidth > 1200) {
      this.sideCols = 4;
    } else if (screenWidth <= 1200 && screenWidth > 900) {
      this.sideCols = 3;
    } else if (screenWidth <= 900 && screenWidth > 700) {
      this.sideCols = 2;
    } else if (screenWidth <= 700) {
      this.sideCols = 1;
    }
  }

  onResize(event) {
    if (event.target.innerWidth >= 1600 && event.target.innerWidth > 1300) {
      this.sideCols = 6;
    } else if (event.target.innerWidth < 1600 && event.target.innerWidth > 1300) {
      this.sideCols = 4;
    } else if (event.target.innerWidth < 800) {
      this.sideCols = 3;
    }
    // this.sideCols = (event.target.innerWidth <= 1400) ? 2 : 1;
  }

}

