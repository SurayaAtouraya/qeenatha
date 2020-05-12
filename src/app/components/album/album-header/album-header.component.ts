import { TestDataService } from 'src/app/test-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album-card/album-card.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-album-header',
  templateUrl: './album-header.component.html',
  styleUrls: ['./album-header.component.scss']
})
export class AlbumHeaderComponent implements OnInit {

  @Input() albumData: Album;

  album: Album;
  isSaved: boolean;

  constructor(public testDataService: TestDataService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.isSaved = false;
    this.album = this.albumData;

    this.testDataService.savedAlbums.subscribe(albums => {
      albums.forEach(album => {
        if (album.albumName === this.album.albumName) {
          this.isSaved = true;
          return;
        }
      });
      this.isSaved = false;
    });
  }

  //TODO THIS SHOULD BE AN API CALL
  saveAlbum() {
    this.testDataService.savedAlbums.subscribe(savedAlbums => {
      if (savedAlbums.length !== 0) {
        savedAlbums.forEach(album => {
          if (album.albumID !== this.album.albumID) {
            savedAlbums.push(this.album);
            this.testDataService.savedAlbums.next(savedAlbums);
            this.showSnackBar('Album Saved', null);
          }
        });
      } else {
        savedAlbums.push(this.album);
        this.testDataService.savedAlbums.next(savedAlbums);
        this.showSnackBar('Album Saved', null);
      }

    });
  }

    //TODO THIS SHOULD BE AN API CALL
    deleteAlbum() {

    }

  showSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
