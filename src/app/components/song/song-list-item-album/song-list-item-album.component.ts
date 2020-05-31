import { SongListItemComponent } from './../song-list-item/song-list-item.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-list-item-album',
  templateUrl: './song-list-item-album.component.html',
  styleUrls: ['./song-list-item-album.component.scss']
})
export class SongListItemAlbumComponent extends SongListItemComponent implements OnInit {

  ngOnInit(): void {
    super.ngOnInit();
  }

  // playSong() {
  //   this.globalService.SongPlaying.next(this.song);
  // }

}
