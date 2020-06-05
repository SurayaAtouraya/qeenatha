import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-log-in-dialog',
  templateUrl: './log-in-dialog.component.html',
  styleUrls: ['./log-in-dialog.component.scss']
})
export class LogInDialogComponent implements OnInit {

  email: string;
  password: string;

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
  }

  logIn() {

    firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch((error) => {

      // Error Handler
      if (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
      console.log('ERROR CODE: ' + error.code);
      console.log('ERROR MSG: ' + error.message);
      } else {
        alert('gud');
      }

    });

    // firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(
    //   function(error) {
    //   console.log('ERROR CODE: ' + error.code);
    //   console.log('ERROR MSG: ' + error.message);
    // });
    // // this.globalService.loggedIn.next(true);
  }

}
