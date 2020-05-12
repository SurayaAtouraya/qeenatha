import { TestDataService } from 'src/app/test-data.service';
import { PlaylistDialogComponent } from './../playlist/playlist-dialog/playlist-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Playlist } from '../playlist/playlist-card/playlist-card.component';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private testDataService: TestDataService) { }

  // really just need playlist name and Id
  playlists: Playlist[];

  ngOnInit(): void {
    this.playlists = [];
    this.testDataService.playlists.subscribe(playlists => {
      this.playlists = playlists;
    });
  }

  openHomePage() {
    this.router.navigate(['/']); //, this.song.artistID
  }

  openSearchPage() {
    this.router.navigate(['/search']); //, this.song.artistID
  }

  openMyMusicPage() {
    this.router.navigate(['/library']); //, this.song.artistID
  }

  goToPlaylist(playlistID: string) {
    this.router.navigate(['/playlist', playlistID]); //, this.song.artistID
  }

  openCreatePlaylistDialog() {
    const dialogRef = this.dialog.open(PlaylistDialogComponent, {
      width: '500px',
      minHeight: '250px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((newPlaylist: Playlist) => {
      if (newPlaylist) {
        this.playlists.push(newPlaylist);
      }
    });
  }

}
