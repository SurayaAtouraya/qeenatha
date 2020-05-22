import { GlobalService } from 'src/app/global.service';
import { TestDataService } from 'src/app/test-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from '../song/song-list-item/song-list-item.component';
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

  // Album ************************************************************************************
  playAlbum() {

    let albumSongs = [];

    // Get Album Songs from id
    this.testDataService.albumSongs.subscribe(songs => {
      songs.forEach(song => {
        if (song.albumID === this.cardData.dataID) {
          albumSongs.push(song);
        }
      });
    });

    console.log(albumSongs);

    // pass to queue var in global, will activate queue and change its local storage

    this.globalService.queue.next(albumSongs);

    // set songPlaying to first song in album in globalserv

    this.globalService.SongPlaying.next(albumSongs[0]);

    // done
  }
  // ******************************************************************************************

  // Playlist ************************************************************************************
  playPlaylist(shuffle: boolean) {

    let songs = [];

    // Get Playlist Songs from id
    this.testDataService.playlistSongs.subscribe(playlistSongs => {
      playlistSongs.forEach(playlist => {
        console.log(playlist.playlistID);
        console.log(this.cardData.dataID);
        if (playlist.playlistID === this.cardData.dataID) {
          songs = playlist.songs;
        }
      });
    });

    console.log('era');
    console.log(songs);

    // pass to queue var in global, will activate queue and change its local storage

    if (shuffle) {
      songs = this.helperFunctions.shuffle(songs);
    }

    this.globalService.queue.next(songs);

    // set songPlaying to first song in album in globalserv

    this.globalService.SongPlaying.next(songs[0]);

    // done
  }
  // ******************************************************************************************

}

export interface CardData {
  imgSrc: string;
  title: string;
  subtitle?: string;
  dataType: string;
  dataID: string;
}
