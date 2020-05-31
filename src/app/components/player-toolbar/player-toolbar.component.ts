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

  // The Song currently playing.
  song: Song;

  // Status of queue open or closed.
  queueOpen: boolean;

  // Queue position of song playing.
  queuePos: number;

  constructor(public globalService: GlobalService) { }

  // Song passed for playing by app component.
  // Set as current song.
  // Unsubscibe from old song (if exists).
  // Initialize and play the song.
  @Input() set songPlaying(song: Song) {
    this.song = song;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.initSong();
  }

  // Request the next song in the queue to play.
  @Output() getNextSong: EventEmitter<number> = new EventEmitter<number>();

  sideCols: number;
  subscription: Subscription;
  audio = new Audio();
  timeElapsed: number;
  sliding: boolean;
  timeElapsedValue: BehaviorSubject<number> = new BehaviorSubject<number>(null);



  ngOnInit(): void {

    // Listen for calls to Song Player functions
    this.globalService.togglePlayState.subscribe(() => {
      this.togglePlayState();
    });


    this.globalService.queuePos.subscribe(queuePos => {
      this.queuePos = queuePos;
    });

    // UI
    this.sideCols = 1;

    this.globalService.queueOpen.subscribe(queueOpen => this.queueOpen = queueOpen);

  }
  test(value) {
    console.log('PUSHING VAL: ' + value);
    this.timeElapsedValue.next(value);
  }

  finishSliding() {
    if (this.sliding === true) {
      this.sliding = false;
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
    this.globalService.isSongPlaying.next(true);
    this.timeElapsed = 0;

    // Keeps UI Up to date on audio
    this.subscription = interval(1000).subscribe( () => {
      this.timeElapsed += 1;
      if (this.timeElapsed >= this.audio.duration) {
        this.playNextSong();
      }
    });

  }

  // ADD CALLS TO PLAYSONG PAUSESONG FOR UI
  togglePlayState() {
    if (this.audio.paused) {
      this.audio.play();
      this.globalService.isSongPlaying.next(true);
      this.subscription = interval(1000).subscribe( () => this.timeElapsed += 1);
    } else {
      this.audio.pause();
      this.globalService.isSongPlaying.next(false);
      this.subscription.unsubscribe();
    }
  }

  toggleAudio() {
    this.audio.muted = !this.audio.muted;
  }

  rewindSong() {
    this.audio.load();
    this.audio.play();
    this.globalService.isSongPlaying.next(true);
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
    this.globalService.queueOpen.next(this.queueOpen);
  }

  // Called when the current song playing finishes.
  playNextSong() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.queuePos += 1;
    this.globalService.queuePos.next(this.queuePos);
    this.getNextSong.emit();
  }

}
