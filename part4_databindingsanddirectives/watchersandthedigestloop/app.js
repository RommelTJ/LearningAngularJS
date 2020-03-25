var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {

  $scope.handle = '';
  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  };

  $scope.$watch('handle', function(newValue, oldValue) {
    console.info("changed");
    console.log("Old: ", oldValue);
    console.log("New: ", newValue);
  });

  $timeout(function() {
    $scope.handle = "newtwitterhandle2";
    console.log("Scope Changed");
    // // Manually starting a digest update.
    // $scope.$apply(function() {
    //   $scope.handle = "newtwitterhandle";
    //   console.log("Scope Changed");
    // });
  }, 3000);

}]);
