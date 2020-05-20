import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Song } from '../song/song-list-item/song-list-item.component';

export interface PeriodicElement {
  position: string;
  lastWeekPosition: string;
  change: number;
  songName: string;
  artistName: string;
  peak: string;
  duration: string;
  description?: string;
  albumCover: string;
}


@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class BillboardComponent implements OnInit {

  @Input() songData: Song[];

  dataSource: MatTableDataSource<Song>;
  columnsToDisplay = ['position', 'lastWeekPosition', 'songArtistName', 'peak', 'duration', 'albumCover'];
  expandedElement: PeriodicElement | null;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.songData);
    this.dataSource.sort = this.sort;
  }

}
