import { GlobalService } from './global.service';
import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WindowService {

  constructor(private globalService: GlobalService) {
    this.onResize();
    this.globalService.isMobile.subscribe(isMobile => this.isMobile = isMobile);
   }

  public sideCols: BehaviorSubject<number> = new BehaviorSubject<number>(8);
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  isMobile: boolean;

  @HostListener('window:resize', ['$event'])
  onResize() {
    const screenWidth = window.innerWidth;
    this.screenWidth.next(screenWidth);
    console.log('SCREENWIDTH: ' + screenWidth);

    // Remove side menu.
    if (screenWidth < 1100) {
      this.globalService.isMobile.next(true);
    } else {
      this.globalService.isMobile.next(false);
    }

    if (this.isMobile) {
      this.sideCols.next(Math.trunc((screenWidth) / 232));
    } else {
      this.sideCols.next(Math.trunc((screenWidth - 200) / 232));
    }

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

export class Grid {
  public static xl = 1280;
  public static lg = 992;
  public static md = 768;
  public static sm = 576;
}
