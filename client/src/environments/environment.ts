// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const baseUrl = "https://hrempmanagement.herokuapp.com/api/"

export const environment = {
  production: false,
  baseUrl: `${baseUrl}`
};
 // baseUrl = 'https://api.themoviedb.org/3/movie/550?api_key=2fcd12d94241b9c772893e9261154f3e';
 //baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=80a33826576591aad78e11cfbde39527&language=en-US&primary_release_date.gte=2022-01-15&primary_release_date.lte=2022-05-22'
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
