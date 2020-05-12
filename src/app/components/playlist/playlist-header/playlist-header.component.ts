import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../../artist/artist-list-item/artist-list-item.component';
import { Playlist } from '../playlist-card/playlist-card.component';

@Component({
  selector: 'app-playlist-header',
  templateUrl: './playlist-header.component.html',
  styleUrls: ['./playlist-header.component.scss']
})
export class PlaylistHeaderComponent implements OnInit {

  @Input() playlistData: Playlist;

  playlist: Playlist;

  constructor() { }

  ngOnInit(): void {

    this.playlist = this.playlistData;

    // this.playlist = {
    //   playlistName: 'Gym Workout Songs',
    //   songCount: 12,
    //   playlistCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8'
    // };

  }

}
