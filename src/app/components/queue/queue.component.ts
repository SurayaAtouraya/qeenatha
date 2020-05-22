import { GlobalService } from 'src/app/global.service';
import { TestDataService } from 'src/app/test-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Song } from '../song/song-list-item/song-list-item.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  queue: Song[];
  queuePos: number;
  displayedColumns: string[] = ['song'];

  constructor(private testDataService: TestDataService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.queue.subscribe(queue => {
      this.queue = queue;
    });

    // Need boundary check TODO
    this.globalService.queuePos.subscribe(queuePos => {
      this.queuePos = queuePos;
      this.globalService.SongPlaying.next(this.queue[queuePos]);
    });
  }

  addToQueue(song: Song) {
    this.queue.splice(this.queue.length, 0, song);
  }

  removeFromQueue(song: Song) {
    const i = this.queue.indexOf(song);
    this.queue.splice(i, 1);
  }

  playNext(song: Song) {
    this.queue.splice(1, 0, song);
  }

  drop(event: CdkDragDrop<Song[]>) {
    moveItemInArray(this.queue, event.previousIndex, event.currentIndex);
  }

  callSongPlayerFunction(functionName: string) {

  }

}
