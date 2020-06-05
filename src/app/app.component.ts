import { QueueComponent } from './components/queue/queue.component';
import { WindowService, Grid } from './window.service';
import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { GlobalService } from './global.service';
import { Song } from './components/song/song-list-item/song-list-item.component';
import { trigger, transition, style, animate } from '@angular/animations';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
    // Song Queue Animations
    animations: [
      trigger(
        'enterAnimation', [
          transition(':enter', [
            style({transform: 'translateY(100%)'}),
            animate('350ms', style({transform: 'translateY(0)'}))
          ]),
          transition(':leave', [
            style({transform: 'translateY(0)'}),
            animate('250ms', style({transform: 'translateY(100%)'}))
          ])
        ]
      )
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(QueueComponent) queueComponent: QueueComponent;

  title = 'Qeenatha';
  isMobile: boolean;
  songPlaying: Song;
  queueOpen: boolean;
  screenWidth: number;
  lg = Grid.lg;


  constructor(private globalService: GlobalService, public windowService: WindowService) { }

  ngOnInit() {

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyB6Rruo-jrK5NfJqqSglE7uBIX-g3rzbQk',
      authDomain: 'qeenatha-ceafb.firebaseapp.com',
      databaseURL: 'https://qeenatha-ceafb.firebaseio.com',
      projectId: 'qeenatha-ceafb',
      storageBucket: 'qeenatha-ceafb.appspot.com',
      messagingSenderId: '851234529030',
      appId: '1:851234529030:web:4d40237eb7b3815ee38887',
      measurementId: 'G-ZV2916EYS1'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    this.windowService.screenWidth.subscribe(width => {
      this.screenWidth = width;
      // console.log('WIDTHB: ' + width);
      // console.log('md: ' + this.md);
      // console.log('BOOL ' + (this.screenWidth <= this.md));
    });

    this.globalService.queueOpen.subscribe(queueOpen => {
      this.queueOpen = queueOpen;
    });

    this.globalService.SongPlaying.subscribe(SongPlaying => this.songPlaying = SongPlaying);

    this.globalService.isMobile.subscribe(isMobile => {
      this.isMobile = isMobile;
    });

    // this.globalService.isMobile.subscribe(isMobile => {
    //   this.isMobile = isMobile;
    // });
  }

  getNextSongEvent() {
    this.queueComponent.playSong();
  }

}

// TODO 32PX MARGIN EVERYTHING!
