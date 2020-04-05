var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController'
    })
    .when('/second', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })
    .when('/second/:num', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    });
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
  $scope.person = {
    name: "John Doe",
    address: "555 Main St.",
    city: "New York",
    state: "NY",
    zipCode: "11111"
  };

  $scope.formattedAddress = function(person) {
    return `${person.address}, ${person.city}, ${person.state} ${person.zipCode}`;
  };

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {

}]);

myApp.directive("searchResults", function() {
  return {
    restrict: 'AECM', // shorthand for "Attribute, Element, Class, Comment". 'AE' is the default.
    templateUrl: './directives/searchResult.html',
    replace: true, // default is false. This replaces the <search-results>.
    scope: {
      personObject: "=", // @ sign means text (one-way binding), = sign means object (two-way binding)
      formattedAddressFunction: "&" // & sign means function
    }
  };
});
