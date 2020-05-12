import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-list-item',
  templateUrl: './artist-list-item.component.html',
  styleUrls: ['./artist-list-item.component.scss']
})
export class ArtistListItemComponent implements OnInit {

  @Input() artistData: Artist;

  constructor(private router: Router) { }

  artist: Artist;

  ngOnInit(): void {

    this.artist = this.artistData;

  }

  goToArtist() {
    this.router.navigate(['/artist', this.artist.artistName]);
  }

  stopDOMTree(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

}

export interface Artist {
  artistName: string;
  artistCoverPhoto: string;
  artistDescription?: string;
  artistSubscribers?: string;
  albumCount?: number;
}
