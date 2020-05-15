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

  constructor(private router: Router, public dialog: MatDialog, private globalService: GlobalService) { }

  // searching: boolean;
  loggedIn: boolean;

  ngOnInit(): void {

    // this.searching = false;

    this.globalService.loggedIn.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
      console.log(this.loggedIn);
    });

  }

  // openSearchBar() {
  //   this.searching = true;
  // }

  // openMyMusicPage() {
  //   this.router.navigate(['/library']); //, this.song.artistID
  // }

  goToBillboardScreen() {
    this.router.navigate(['/billboards']); //, this.song.artistID
  }

  goToRadioScreen() {
    this.router.navigate(['/radio']); //, this.song.artistID
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
    // TODO
  }

  logOut() {
    this.globalService.loggedIn.next(false);
  }

}
