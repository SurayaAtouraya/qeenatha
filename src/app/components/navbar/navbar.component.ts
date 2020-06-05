import { BlockDialogComponent } from './../block-dialog/block-dialog.component';
import { WindowService } from 'src/app/window.service';
import { Grid } from './../../window.service';
import { SignUpDialogComponent } from './../sign-up-dialog/sign-up-dialog.component';
import { LogInDialogComponent } from './../log-in-dialog/log-in-dialog.component';
import { SettingsDialogComponent } from './../settings-dialog/settings-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from '../../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private globalService: GlobalService,
              private windowService: WindowService) { }

  // searching: boolean;
  loggedIn: boolean;

  isMobile: boolean;

  screenWidth: number;
  lg = Grid.lg;

  ngOnInit(): void {

    // this.searching = false;

    this.globalService.loggedIn.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });

    this.globalService.isMobile.subscribe(isMobile => this.isMobile = isMobile);

    this.windowService.screenWidth.subscribe(width => {
      this.screenWidth = width;
    });

  }

  // openSearchBar() {
  //   this.searching = true;
  // }

  goToMyMusicScreen() {
    this.router.navigate(['/library']); //TEMP TODO
    // if (this.loggedIn) {
    //   this.router.navigate(['/library']); //, this.song.artistID
    // } else {
    //   // Show Login/signup screen
    //   this.openBlockDialog();
    // }

  }

  goToHomeScreen() {
    this.router.navigate(['/']); //, this.song.artistID
  }

  goToBillboardScreen() {
    this.router.navigate(['/billboards']); //, this.song.artistID
  }

  goToRadioScreen() {
    this.router.navigate(['/radio']); //, this.song.artistID
  }

  openSearchPage() {
    this.router.navigate(['/search']); //, this.song.artistID
  }

  openBlockDialog(): void {
    const dialogRef = this.dialog.open(BlockDialogComponent, {
      width: '1000px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openSettingsDialog(): void {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      width: '1000px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openLogInDialog() {
    const dialogRef = this.dialog.open(LogInDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openSignUpDialog() {
    const dialogRef = this.dialog.open(SignUpDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  logOut() {
    this.globalService.loggedIn.next(false);
  }

}
