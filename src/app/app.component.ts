import { WindowService } from './window.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Router } from '@angular/router';
import { Song } from './components/song/song-list-item/song-list-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Qeenatha';
  isMobile: boolean;
  songPlaying: Song;

  constructor(private globalService: GlobalService, public windowService: WindowService) { }

  ngOnInit() {

    this.globalService.SongPlaying.subscribe(SongPlaying => this.songPlaying = SongPlaying);

    this.globalService.isMobile.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }

}

// TODO 32PX MARGIN EVERYTHING!
