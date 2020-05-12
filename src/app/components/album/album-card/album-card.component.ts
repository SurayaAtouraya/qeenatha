import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input() albumData: Album;

  album: Album;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.album = this.albumData;
  }

  goToAlbum() {
    // TODO PASS THE ALBUM ID HERE IN THE FUTURE
    this.router.navigate(['/album', this.album.albumName]); //this.album.albumID
  }

}

export interface Album {
  albumName: string;
  albumYear: string;
  albumCover: string;
  albumArtist?: string;
  albumDescription?: string;
  albumID?: string;
  songCount?: number;
}
