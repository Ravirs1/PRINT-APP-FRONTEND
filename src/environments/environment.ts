// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL: 'localhost:4200',
  AIRLINE_BASE_URL: 'test.com',
  NAME:'local enviornment',
  firebaseConfig : {
    apiKey: "AIzaSyDchZBjsGxTNLHuRMUBvpFl8z8MFdQFiGo",
    authDomain: "fatcity-testing.firebaseapp.com",
    projectId: "fatcity-testing",
    storageBucket: "fatcity-testing.appspot.com",
    messagingSenderId: "1064980094960",
    appId: "1:1064980094960:web:abd7cea6921995643fc735",
    measurementId: "G-YCRHGN7M5M"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
