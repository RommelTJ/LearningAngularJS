var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
  // AngularJS Dependency Injection includes $scope object service
  // All AngularJS services start with a dollar sign.
  $scope.name = "Rommel";
  $scope.getName = function() {
    return 'John Doe';
  };
  console.log($scope);
});
