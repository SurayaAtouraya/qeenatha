import { Song } from './../../components/song/song-list-item/song-list-item.component';
import { TestDataService } from 'src/app/test-data.service';
import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/components/playlist/playlist-card/playlist-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playlistSongs: Song[];
  playlist: Playlist;

  constructor(private router: Router, private testDataService: TestDataService) { }

  ngOnInit(): void {
    const playlistID = this.router.url.substring(this.router.url.lastIndexOf('/') + 1);

    this.testDataService.playlistSongs.subscribe(playlistSongs => {
      this.playlistSongs = playlistSongs;
    });

    this.testDataService.playlists.subscribe(playlist => {
      this.playlist = playlist[1];
    });
  }

}
