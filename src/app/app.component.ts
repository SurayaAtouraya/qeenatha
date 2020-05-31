import { QueueComponent } from './components/queue/queue.component';
import { WindowService } from './window.service';
import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { GlobalService } from './global.service';
import { Song } from './components/song/song-list-item/song-list-item.component';
import { trigger, transition, style, animate } from '@angular/animations';

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

  constructor(private globalService: GlobalService, public windowService: WindowService) { }

  ngOnInit() {

    this.globalService.queueOpen.subscribe(queueOpen => {
      this.queueOpen = queueOpen;
    });

    this.globalService.SongPlaying.subscribe(SongPlaying => this.songPlaying = SongPlaying);

    this.globalService.isMobile.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }

  getNextSongEvent() {
    this.queueComponent.playSong();
  }

}

// TODO 32PX MARGIN EVERYTHING!
