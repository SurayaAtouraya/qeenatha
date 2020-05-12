import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WindowService {

  public sideCols: BehaviorSubject<number> = new BehaviorSubject<number>(8);

  constructor() {
    this.onResize();
   }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    this.sideCols.next(Math.trunc((screenWidth - 200) / 232));
    // (screenWidth % 250)
    // if (screenWidth > 2000) {
    //   this.sideCols.next(8);
    // } else if (screenWidth <= 2000 && screenWidth > 1600) {
    //   this.sideCols.next(7);
    // } else if (screenWidth <= 1600 && screenWidth > 1200) {
    //   this.sideCols.next(4);
    // } else if (screenWidth <= 1200 && screenWidth > 900) {
    //   this.sideCols.next(3);
    // } else if (screenWidth <= 900 && screenWidth > 700) {
    //   this.sideCols.next(2);
    // } else if (screenWidth <= 700) {
    //   this.sideCols.next(1);
    // }
  }

}
