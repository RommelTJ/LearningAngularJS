var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
  console.log($scope); // AngularJS Dependency Injection includes $scope object service
  // All AngularJS services start with a dollar sign.
});
