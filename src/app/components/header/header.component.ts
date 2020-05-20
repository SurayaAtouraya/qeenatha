import { Component, OnInit, Input } from '@angular/core';
import { TestDataService } from 'src/app/test-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() HeaderData: HeaderData;
  albumIsSaved = false;

  // Artist Only
  subscribed: boolean;
  subscribeText: string;

  constructor(public testDataService: TestDataService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.subscribed = false;
    this.subscribeText = 'SUBSCRIBE';
  }

  //TODO THIS SHOULD BE AN API CALL
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
