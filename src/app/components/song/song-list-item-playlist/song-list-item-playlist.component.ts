import { Component, OnInit } from '@angular/core';
import { SongListItemComponent } from '../song-list-item/song-list-item.component';

@Component({
  selector: 'app-song-list-item-playlist',
  templateUrl: './song-list-item-playlist.component.html',
  styleUrls: ['./song-list-item-playlist.component.scss']
})
export class SongListItemPlaylistComponent extends SongListItemComponent implements OnInit {

  ngOnInit(): void {
    super.ngOnInit();
  }

}
