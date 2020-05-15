import { TestDataService } from 'src/app/test-data.service';
import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/components/song/song-list-item/song-list-item.component';
import { Artist } from 'src/app/components/artist/artist-list-item/artist-list-item.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searching: boolean;

  searchSongs: Song[];
  searchAlbums: any[];
  searchArtists: Artist[];

  constructor(public testDataService: TestDataService) { }

  ngOnInit(): void {
    this.searching = false;

    this.testDataService.searchSongs.subscribe(songs => this.searchSongs = songs);
    this.testDataService.searchAlbums.subscribe(albums => this.searchAlbums = albums);
    this.testDataService.searchArtists.subscribe(artists => this.searchArtists = artists);
  }

  search() {
    this.searching = true;
  }

}
