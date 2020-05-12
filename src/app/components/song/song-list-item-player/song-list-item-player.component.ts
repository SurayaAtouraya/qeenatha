import { SongListItemComponent } from './../song-list-item/song-list-item.component';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-song-list-item-player',
  templateUrl: './song-list-item-player.component.html',
  styleUrls: ['./song-list-item-player.component.scss']
})
export class SongListItemPlayerComponent extends SongListItemComponent implements OnInit, OnChanges {

  mini = false;

  ngOnChanges() {
    super.song = this.songData;
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

    onResize(event) {
      if (event.target.innerWidth < 800) {
        this.mini = true;
      }
    }

}
