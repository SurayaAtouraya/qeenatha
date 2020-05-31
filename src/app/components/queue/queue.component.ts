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
    });
  }

  addToQueue(song: Song) {
    this.queue.splice(this.queue.length, 0, song);
  }

  removeFromQueue(song: Song) {
    const i = this.queue.indexOf(song);
    this.queue.splice(i, 1);
    if (this.queuePos > i) {
      this.globalService.queuePos.next(this.queuePos - 1);
    } else if (this.queuePos === i) {
      if (i === this.queue.length) {
        this.globalService.queuePos.next(this.queuePos - 1);
      }
      this.playSong();
    }
  }

  playNext(song: Song) {
    this.queue.splice(1, 0, song);
    if (this.queuePos > 0) {
      this.globalService.queuePos.next(this.queuePos + 1);
    }
  }

  drop(event: CdkDragDrop<Song[]>) {
    moveItemInArray(this.queue, event.previousIndex, event.currentIndex);
    if (this.queuePos === event.previousIndex) {
      this.globalService.queuePos.next(event.currentIndex);
    }
    // Current song overtaken
    else if (this.queuePos <= event.currentIndex && this.queuePos > event.previousIndex) {
      this.globalService.queuePos.next(this.queuePos - 1);
    }
    // Current song moves up
    else if (this.queuePos < event.previousIndex && this.queuePos >= event.currentIndex) {
      this.globalService.queuePos.next(this.queuePos + 1);
    }
  }

  playSong() {
    this.globalService.SongPlaying.next(this.queue[this.queuePos]);
  }

}
