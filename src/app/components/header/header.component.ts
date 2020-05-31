import { GlobalService } from 'src/app/global.service';
import { Component, OnInit, Input } from '@angular/core';
import { TestDataService } from 'src/app/test-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HelperFunctionsService } from 'src/app/helper-functions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() HeaderData: HeaderData;
  albumIsSaved: boolean;

  // Artist Only
  subscribed: boolean;
  subscribeText: string;

  constructor(public testDataService: TestDataService, private snackBar: MatSnackBar,
              private globalService: GlobalService, private helperFunctions: HelperFunctionsService) { }

  ngOnInit(): void {

    // Album *************************************************
    // Check if Album is already saved TODO API CALL
    if (this.HeaderData.dataType === 'album') {
      this.testDataService.savedAlbums.subscribe(albums => {
        albums.forEach(album => {
          if (album.albumID === this.HeaderData.dataID) {
            this.albumIsSaved = true;
            return;
          }
          this.albumIsSaved = false;
        });
        console.log('HELLLOO: ' + this.albumIsSaved);
      });
    }
    // *******************************************************

    this.subscribed = false;
    this.subscribeText = 'SUBSCRIBE';
  }

  // TODO THIS SHOULD BE AN API CALL
  saveAlbum() {
    // this.testDataService.savedAlbums.subscribe(savedAlbums => {
    //   if (savedAlbums.length !== 0) {
    //     savedAlbums.forEach(album => {
    //       if (album.albumID !== this.album.albumID) {
    //         savedAlbums.push(this.album);
    //         this.testDataService.savedAlbums.next(savedAlbums);
    //         this.showSnackBar('Album Saved', null);
    //       }
    //     });
    //   } else {
    //     savedAlbums.push(this.album);
    //     this.testDataService.savedAlbums.next(savedAlbums);
    //     this.showSnackBar('Album Saved', null);
    //   }

    // });
  }

  deleteAlbum() {

  }

  subscribe() {
    if (this.subscribed) {
      this.subscribed = false;
      this.subscribeText = 'SUBSCRIBE';
    } else {
      this.subscribed = true;
      this.subscribeText = 'SUBSCRIBED';
    }
  }

  showSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

    play(shuffle: boolean) {

      let songs = [];

      // Get Album Songs from id
      if (this.HeaderData.dataType === 'album') {
        this.testDataService.albumSongs.subscribe(albumSongs => {
          albumSongs.forEach(albumSong => {
            if (albumSong.albumID === this.HeaderData.dataID) {
              songs.push(albumSong);
            }
          });
        });
      } else if (this.HeaderData.dataType === 'artist') {

      } else if (this.HeaderData.dataType === 'playlist') {
        this.testDataService.playlistSongs.subscribe(playlistSongs => {
          playlistSongs.forEach(playlist => {
            console.log(playlist.playlistID);
            console.log(this.HeaderData.dataID)
            if (playlist.playlistID === this.HeaderData.dataID) {
              songs = playlist.songs;
            }
          });
        });
      }


      if (shuffle) {
        songs = this.helperFunctions.shuffle(songs);
      }

      // pass to queue var in global, will activate queue and change its local storage

      this.globalService.queue.next(songs);

      // set songPlaying to first song in list in globalserv

      this.globalService.SongPlaying.next(songs[0]);

      // done
    }

}


export interface HeaderData {
  imgSrc: string;
  desc?: string;
  title: string;
  subtitle: string;
  subtitle2?: string;
  dataType: string;
  dataID: string;
  chips?: string[];
  artistSubscribers?: string;
}
