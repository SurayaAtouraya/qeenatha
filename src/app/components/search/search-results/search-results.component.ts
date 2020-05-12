import { TestDataService } from 'src/app/test-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../../song/song-list-item/song-list-item.component';
import { Album } from '../../album/album-card/album-card.component';
import { Artist } from '../../artist/artist-list-item/artist-list-item.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  searchSongs: Song[];
  searchAlbums: Album[];
  searchArtists: Artist[];

  @Input() songData: Song[];
  @Input() albumData: Album[];
  @Input() artistData: Artist[];

  filter: string;

  constructor() { }

  ngOnInit(): void {
    this.filter = null;

    this.searchSongs = this.songData;
    this.searchAlbums = this.albumData;
    this.searchArtists = this.artistData;

  }

  onFilter(filter: string) {
    this.filter = filter;
  }

}
