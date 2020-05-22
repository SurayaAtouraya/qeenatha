import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Song } from './components/song/song-list-item/song-list-item.component';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {

  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isMobile: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public SongPlaying: BehaviorSubject<Song> = new BehaviorSubject<Song>(null);
  public isSongPlaying: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public queue: BehaviorSubject<Song[]> = new BehaviorSubject<Song[]>(null);
  public queueOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public queuePos: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  // public callPlayerFunction: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() { }

}
