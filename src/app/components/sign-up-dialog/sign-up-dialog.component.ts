import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.scss']
})
export class SignUpDialogComponent implements OnInit {

  email: string;
  password: string;

  googleProvider;

  constructor() { }

  ngOnInit(): void {
    if (!this.googleProvider) {
      this.googleProvider = new firebase.auth.GoogleAuthProvider();
    }
  }

  signUpEmail() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch((error) => {
      // Error Handler
      if (error) {
        console.log('ERROR CODE: ' + error.code);
        console.log('ERROR MSG: ' + error.message);
      }

    });
  }

  signUpProvider() {
    firebase.auth().signInWithRedirect(this.googleProvider);
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      const user = result.user;
      alert(user);
    }).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log('ERROR CODE: ' + error.code);
      console.log('ERROR MSG: ' + error.message);
      // ...
    });

    // firebase.auth().signInWithPopup(this.googleProvider).then(function(result) {

    //   // // This gives you a Google Access Token. You can use it to access the Google API.
    //   // const token = (OAuthCredential)result.credential.accessToken;

    //   // The signed-in user info.
    //   const user = result.user;
    //   alert(user);

    // }).catch(function(error) {

    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.log('ERROR CODE: ' + error.code);
    //   console.log('ERROR MSG: ' + error.message);

    //   // The email of the user's account used.
    //   const email = error.email;

    //   // The firebase.auth.AuthCredential type that was used.
    //   const credential = error.credential;

    // });
  }

}
