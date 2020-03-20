var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $log) {
  console.log($log);
  $log.info("Whut");
});
