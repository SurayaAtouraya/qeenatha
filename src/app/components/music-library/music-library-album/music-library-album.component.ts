import { TestDataService } from 'src/app/test-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-library-album',
  templateUrl: './music-library-album.component.html',
  styleUrls: ['./music-library-album.component.scss']
})
export class MusicLibraryAlbumComponent implements OnInit {

  savedAlbums = [];

  constructor(public testDataService: TestDataService) { }

  ngOnInit(): void {
    this.testDataService.savedAlbums.subscribe(savedAlbums => {
      this.savedAlbums = savedAlbums;
    });
  }

}
