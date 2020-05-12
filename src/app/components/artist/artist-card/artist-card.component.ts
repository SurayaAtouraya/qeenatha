import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../artist-list-item/artist-list-item.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {

  @Input() artistData: Artist;

  artist: Artist;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.artist = this.artistData;
  }

  goToArtist() {
    this.router.navigate(['artist', this.artist.artistName]);
  }

}
