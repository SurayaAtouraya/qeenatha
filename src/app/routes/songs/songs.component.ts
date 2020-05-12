import { TestDataService } from 'src/app/test-data.service';
import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/components/song/song-list-item/song-list-item.component';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  artistSongs = [];

  constructor(private testDataService: TestDataService) { }

  ngOnInit(): void {
    // TODO API REQUEST ALL SONGS BY AN ARTST
    this.testDataService.allSongs.subscribe(songs => {
      this.shuffle(songs);
      this.artistSongs = songs;
    });
  }

  shuffle(songs: Song[]) {
    for (let i = songs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    return songs;
  }

}
