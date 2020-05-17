import { WindowService } from './../../../window.service';
import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from 'src/app/test-data.service';
import { CardData } from '../../card/card.component';

@Component({
  selector: 'app-playlist-tab',
  templateUrl: './playlist-tab.component.html',
  styleUrls: ['./playlist-tab.component.scss']
})
export class PlaylistTabComponent implements OnInit {

  @Input() playlistData: Playlist[];

  constructor(private windowService: WindowService) { }

  playlists = [];
  playlistsCardData = [];

  cols: number;


  ngOnInit(): void {
    this.playlists = this.playlistData;
    this.windowService.sideCols.subscribe(cols => this.cols = cols);
    this.playlists.forEach(playlist => {
      console.log(playlist);
      this.playlistsCardData.push(
        {
          imgSrc: playlist.playlistCover,
          title: playlist.playlistName,
          subtitle: playlist.songCount + ' Songs',
          dataType: 'playlist',
          dataID: playlist.playlistName,
        }
      )
    });
  }

  // onResize(event) {
  //   console.log(event.target.innerWidth);

  //   if (event.target.innerWidth > 2000) {
  //     this.cols = 8;
  //   } else if (event.target.innerWidth <= 2000 && event.target.innerWidth > 1600) {
  //     this.cols = 6;
  //   } else if (event.target.innerWidth <= 1600 && event.target.innerWidth > 1200) {
  //     this.cols = 4;
  //   } else if (event.target.innerWidth <= 1200 && event.target.innerWidth > 900) {
  //     this.cols = 3;
  //   } else if (event.target.innerWidth <= 900 && event.target.innerWidth > 700) {
  //     this.cols = 2;
  //   } else if (event.target.innerWidth <= 700) {
  //     this.cols = 1;
  //   }

  //   // if (event.target.innerWidth >= 1600 && event.target.innerWidth > 1300) {
  //   //   this.cols = 6;
  //   // } else if (event.target.innerWidth < 1300 && event.target.innerWidth > 800) {
  //   //   this.cols = 4;
  //   // } else if (event.target.innerWidth < 800) {
  //   //   this.cols = 3;
  //   // }
  //   // this.cols = (event.target.innerWidth <= 1400) ? 2 : 1;
  // }

}
