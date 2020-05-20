import { TestDataService } from 'src/app/test-data.service';
import { Component, OnInit } from '@angular/core';
import { Song } from '../song/song-list-item/song-list-item.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  queue: Song[];
  displayedColumns: string[] = ['song'];

  constructor(private testDataService: TestDataService) { }

  ngOnInit(): void {
    this.testDataService.allSongs.subscribe(songs => {
      this.queue = songs;
    });
  }

  drop(event: CdkDragDrop<Song[]>) {
    moveItemInArray(this.queue, event.previousIndex, event.currentIndex);
  }

}
