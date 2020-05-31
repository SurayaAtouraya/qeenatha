import { GlobalService } from 'src/app/global.service';
import { TestDataService } from 'src/app/test-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HelperFunctionsService } from 'src/app/helper-functions.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardData: CardData;

  constructor(private router: Router, private testDataService: TestDataService, private globalService: GlobalService,
              private helperFunctions: HelperFunctionsService) { }

  ngOnInit(): void {
  }

  goToDest() {
    // TODO PASS THE ALBUM ID HERE IN THE FUTURE
    console.log('/' + this.cardData.dataType);
    this.router.navigate(['/' + this.cardData.dataType + '/', this.cardData.dataID]); // ID
  }

  stopDOMTree(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  play(shuffle: boolean) {

    let songs = [];

    // Get Album Songs from id
    if (this.cardData.dataType === 'album') {
      this.testDataService.albumSongs.subscribe(albumSongs => {
        albumSongs.forEach(albumSong => {
          if (albumSong.albumID === this.cardData.dataID) {
            songs.push(albumSong);
          }
        });
      });
    } else if (this.cardData.dataType === 'artist') {

    } else if (this.cardData.dataType === 'playlist') {
      alert('yallah');
      this.testDataService.playlistSongs.subscribe(playlistSongs => {
        playlistSongs.forEach(playlist => {
          if (playlist.playlistID === this.cardData.dataID) {
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

export interface CardData {
  imgSrc: string;
  title: string;
  subtitle?: string;
  dataType: string;
  dataID: string;
}
