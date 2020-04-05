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
    
    
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

myApp.directive("searchResults", function() {
  return {
    template: '' +
      '<li class="list-group-item">\n' +
      '  <div>Doe, John</div>\n' +
      '  <div>555 Main St., New York, NY 11111</div>\n' +
      '</li>'
  };
});