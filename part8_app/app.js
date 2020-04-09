var weatherApp = angular.module('weatherApp', ["ngRoute", "ngResource", "ngSanitize"]);



weatherApp.directive("weatherReport", function() {
  return {
    restrict: 'E',
    templateUrl: './directives/weatherReport.html',
    replace: true,
    scope: {
      weatherDay: "=",
      convertToStandard: "&",
      convertToDate: "&",
      dateFormat: "@"
    }
  }
});