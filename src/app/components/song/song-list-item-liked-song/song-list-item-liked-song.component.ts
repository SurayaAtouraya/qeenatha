import { SongListItemComponent } from './../song-list-item/song-list-item.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-list-item-liked-song',
  templateUrl: './song-list-item-liked-song.component.html',
  styleUrls: ['./song-list-item-liked-song.component.scss']
})
export class SongListItemLikedSongComponent extends SongListItemComponent implements OnInit {

  ngOnInit(): void {
    super.ngOnInit();
  }

}
