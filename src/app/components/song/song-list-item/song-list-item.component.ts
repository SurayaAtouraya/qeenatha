import { WindowService, Grid } from './../../../window.service';
import { GlobalService } from './../../../global.service';
import { TestDataService } from 'src/app/test-data.service';
import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-song-list-item',
  templateUrl: './song-list-item.component.html',
  styleUrls: ['./song-list-item.component.scss']
})
export class SongListItemComponent implements OnInit {

  constructor(protected router: Router, protected snackBar: MatSnackBar, protected testDataService: TestDataService,
              protected globalService: GlobalService, public windowService: WindowService) { }

  @Input() songData: Song;
  @Output() songPlaying: Song;

  @ViewChild(MatRipple) ripple: MatRipple;
  clicked = false;
  rippleButton(event) {
    this.ripple.launch(0, 0, { centered: true });
    this.clicked = false;
  }

  isMobile = false;

  sm = Grid.sm;

  screenWidth: number;

  song: Song;

  showPlayButton: boolean;


  ngOnInit(): void {

    // device detection
    this.globalService.isMobile.subscribe(isMobile => {
      this.isMobile = isMobile;
    });

    this.windowService.screenWidth.subscribe(width => {
      this.screenWidth = width;
      // console.log('width: ' + width);
      // console.log('sm: ' + this.sm);
      // console.log('era ' + (this.screenWidth <= this.sm));
    });

    this.song = this.songData;

    this.showPlayButton = false;


  }

  playSong() {
    this.globalService.SongPlaying.next(this.song);
  }

  goToArtist(): void {
    this.router.navigate(['/artist', this.song.artistID]);
  }

  goToAlbum(): void {
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

}

export interface Song {
  songName?: string;
  artistID?: string;
  artistName?: string;
  albumID?: string;
  albumName?: string;
  albumCover?: string;
  songLength?: string;
  songLengthSeconds?: number;
  songNumber?: string;
  songLiked?: boolean;
  songDisliked?: boolean;
  peak?: string;
  change?: string;
  duration?: string;
  lastWeekPosition?: string;
  position?: string;
  audioSrc?: string;
}
