import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-log-in-dialog',
  templateUrl: './log-in-dialog.component.html',
  styleUrls: ['./log-in-dialog.component.scss']
})
export class LogInDialogComponent implements OnInit {

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
  }

  logIn() {
    this.globalService.loggedIn.next(true);
  }

}
