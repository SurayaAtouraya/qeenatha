import { GlobalService } from './../../global.service';
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { interval, Subscription, BehaviorSubject } from 'rxjs';
import { Song } from '../song/song-list-item/song-list-item.component';

@Component({
  selector: 'app-player-toolbar',
  templateUrl: './player-toolbar.component.html',
  styleUrls: ['./player-toolbar.component.scss']
})

export class PlayerToolbarComponent implements OnInit {

  // Emit whether to open the queue or no
  @Output() onOpenQueue: EventEmitter<boolean> = new EventEmitter<boolean>();

  song: Song;
  queueOpen: boolean;

  constructor(public globalService: GlobalService) { }

  @Input() set songPlaying(song: Song) {
    this.song = song;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.initSong();
  }

  sideCols: number;
  isPlaying: boolean;
  subscription: Subscription;
  audio = new Audio();
  timeElapsed: number;
  sliding: boolean;
  timeElapsedValue: BehaviorSubject<number> = new BehaviorSubject<number>(null);



  ngOnInit(): void {

    // UI
    this.sideCols = 1;

    this.queueOpen = false;

  }
  test(value) {
    console.log('PUSHING VAL: ' + value);
    this.timeElapsedValue.next(value);
  }

  finish() {
    if (this.sliding === true) {
      this.sliding = false;
      console.log('DONE!');
      this.timeElapsedValue.subscribe(time => {
        this.timeElapsed = time;
        this.audio.currentTime = time;
      }).unsubscribe();
    }
  }

  initSong() {

    // Convert Time to Number
    const arr = this.song.songLength.split(':');
    this.song.songLengthSeconds = +arr[0] * 60 + +arr[1];

    // Setup Audio
    this.audio.src = this.song.audioSrc;
    this.audio.load();
    this.audio.play();
    this.timeElapsed = 0;
    this.isPlaying = true;

    // Keeps UI Up to date on audio
    this.subscription = interval(1000).subscribe( () => this.timeElapsed += 1);

  }

  // ADD CALLS TO PLAYSONG PAUSESONG FOR UI
  togglePlayState() {
    if (this.audio.paused) {
      this.audio.play();
      this.subscription = interval(1000).subscribe( () => this.timeElapsed += 1);
    } else {
      this.audio.pause();
      this.subscription.unsubscribe();
    }
  }

  toggleAudio() {
    this.audio.muted = !this.audio.muted;
  }

  rewindSong() {
    this.audio.load();
    this.audio.play();
  }

  pauseSong() {
    this.subscription.unsubscribe();
  }

  onResize(event) {
    if (event.target.innerWidth >= 1600 && event.target.innerWidth > 1300) {
      this.sideCols = 1;
    } else if (event.target.innerWidth < 1600 && event.target.innerWidth > 1300) {
      this.sideCols = 2;
    } else if (event.target.innerWidth < 800) {
      this.sideCols = 3;
    }
    // this.sideCols = (event.target.innerWidth <= 1400) ? 2 : 1;
  }

  openQueue() {
    this.queueOpen = !this.queueOpen;
    this.onOpenQueue.emit(this.queueOpen);
  }

}
