import { Component, OnInit } from '@angular/core';
import { Playlist } from '../playlist-card/playlist-card.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-playlist-dialog',
  templateUrl: './playlist-dialog.component.html',
  styleUrls: ['./playlist-dialog.component.scss']
})
export class PlaylistDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PlaylistDialogComponent>) { }

  playlistName: string;
  playlistDescription: string;

  ngOnInit(): void {
  }

  savePlaylist() {
    // SEND API CALL HERE
    let newPlaylist: Playlist;
    newPlaylist = {
      playlistName: this.playlistName,
      playlistCover: '../../../../assets/defaultPlaylistLogo.png',
      songCount: 0
    };

    // test data
    this.dialogRef.close(newPlaylist);
  }

}
