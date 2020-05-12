import { TestDataService } from './../../test-data.service';
import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/components/song/song-list-item/song-list-item.component';

@Component({
  selector: 'app-billboards',
  templateUrl: './billboards.component.html',
  styleUrls: ['./billboards.component.scss']
})
export class BillboardsComponent implements OnInit {

  constructor(private testDataService: TestDataService) { }

  billboardSongs: Song[];

  ngOnInit(): void {
    this.testDataService.billboardSongs.subscribe(songs => this.billboardSongs = songs);
  }

}
