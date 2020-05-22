import { PlayerToolbarComponent } from './../../player-toolbar/player-toolbar.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TestDataService } from 'src/app/test-data.service';
import { GlobalService } from 'src/app/global.service';
import { Song } from '../song-list-item/song-list-item.component';

@Component({
  selector: 'app-song-list-item-queue',
  templateUrl: './song-list-item-queue.component.html',
  styleUrls: ['./song-list-item-queue.component.scss']
})
export class SongListItemQueueComponent implements OnInit {

  constructor(protected router: Router, protected snackBar: MatSnackBar, protected testDataService: TestDataService,
              protected globalService: GlobalService) { }

    @Input() songData: Song;

    // TODO CHANGE NAME
    @Input() set songSelected(songSelected: boolean) {
      if (songSelected) {
        this.icon = 'volume_up';
      } else {
        this.icon = 'play_arrow';
      }
    }

    icon: string;

    @Output() songPlaying: Song;
    @Output() removeFromQueueEvent: EventEmitter<Song> = new EventEmitter<Song>();
    @Output() playNextEvent: EventEmitter<Song> = new EventEmitter<Song>();
    @Output() addToQueueEvent: EventEmitter<Song> = new EventEmitter<Song>();
    @Output() callSongPlayerFunction: EventEmitter<string> = new EventEmitter<string>();


    song: Song;
    isSongPlaying: boolean;

    showPlayButton: boolean;


  ngOnInit(): void {

    this.globalService.isSongPlaying.subscribe(isSongPlaying => this.isSongPlaying = isSongPlaying);

    this.song = this.songData;

    this.showPlayButton = false;
  }

  songAction() {
    if (this.songSelected) {
      if (this.isSongPlaying) {
        this.callSongPlayerFunction.next('Pause Song');
      } else {
        this.callSongPlayerFunction.next('Play Song');
      }
    } else {
      this.globalService.SongPlaying.next(this.song);
    }
  }

  goToArtist(): void {
    this.globalService.queueOpen.next(false);
    this.router.navigate(['/artist', this.song.artistID]);
  }

  goToAlbum(): void {
    this.globalService.queueOpen.next(false);
    this.router.navigate(['/album', this.song.albumID]);
  }

    // TODO API CALL ION THESE
  dislikeSong() {
    if (this.song.songLiked) {
      this.song.songLiked = false;
      this.song.songDisliked = true;
      this.testDataService.removeFromLikedSongs(this.song);
      this.showSnackBar('Song Disliked!', null);
    } else {
      if (this.song.songDisliked) {
        this.song.songDisliked = false;
      } else {
        this.song.songDisliked = true;
        this.showSnackBar('Song Disliked!', null);
      }
    }
  }

  likeSong() {
    if (this.song.songDisliked) {
      this.song.songLiked = true;
      this.song.songDisliked = false;
      this.testDataService.addToLikedSongs(this.song);
      this.showSnackBar('Song Liked!', null);
    } else {
      if (this.song.songLiked) {
        this.testDataService.removeFromLikedSongs(this.song);
        this.song.songLiked = false;
      } else {
        this.song.songLiked = true;
        this.testDataService.addToLikedSongs(this.song);
        this.showSnackBar('Song Liked!', null);
      }
    }
  }

  showSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  removeFromQueue() {
    this.removeFromQueueEvent.emit(this.song);
  }

  playNext() {
    this.playNextEvent.emit(this.song);
  }

  addToQueue() {
    this.addToQueueEvent.emit(this.song);
  }

}
