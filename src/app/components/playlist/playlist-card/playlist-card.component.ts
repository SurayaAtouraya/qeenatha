import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Playlist } from 'src/app/test-data.service';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent implements OnInit {

  // playlist: Playlist;

  @Input() playlist: Playlist;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  goToPlaylist() {
    this.router.navigate(['/playlist', this.playlist.playlistID]);
  }

}

