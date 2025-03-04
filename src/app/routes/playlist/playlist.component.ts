import { HeaderData } from 'src/app/components/header/header.component';
import { Song } from './../../components/song/song-list-item/song-list-item.component';
import { TestDataService, Playlist } from 'src/app/test-data.service';
import { Component, OnInit } from '@angular/core';import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playlistSongs: Song[];
  playlist: Playlist;
  playlistHeaderData: HeaderData;

  constructor(private router: Router, private testDataService: TestDataService) { }

  ngOnInit(): void {
    const playlistID = this.router.url.substring(this.router.url.lastIndexOf('/') + 1);

    this.testDataService.playlistSongs.subscribe(playlistSongs => {
      this.playlistSongs = playlistSongs[0].songs;
    });

    this.testDataService.playlists.subscribe(playlist => {
      this.playlist = playlist[1];
      this.playlistHeaderData = {
        imgSrc: this.playlist.playlistCover,
        title: this.playlist.playlistName,
        subtitle: 'Playlist',
        subtitle2: this.playlist.songCount.toString() + ' Songs',
        dataType: 'playlist',
        dataID: this.playlist.playlistID,
      };
      console.log(this.playlistHeaderData);
    });
  }

}
