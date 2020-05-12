import { Component, OnInit } from '@angular/core';
import { SongListItemComponent } from '../song-list-item/song-list-item.component';

@Component({
  selector: 'app-song-list-item-artist',
  templateUrl: './song-list-item-artist.component.html',
  styleUrls: ['./song-list-item-artist.component.scss']
})
export class SongListItemArtistComponent extends SongListItemComponent implements OnInit {

  ngOnInit(): void {
    super.ngOnInit();
  }

}
