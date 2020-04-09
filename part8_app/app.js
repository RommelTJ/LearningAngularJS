var weatherApp = angular.module('weatherApp', ["ngRoute", "ngResource", "ngSanitize"]);

weatherApp.config(function($routeProvider, $locationProvider, $sceDelegateProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'homeController'
    })
    .when('/forecast', {
      templateUrl: 'pages/forecast.html',
      controller: 'forecastController'
    });

  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://api.openweathermap.org/**'
  ]);
});

weatherApp.service('cityService', function() {
  this.city = "New York, NY";
});

weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
  $scope.city = cityService.city;
  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  })
}]);

weatherApp.controller(
  'forecastController',
  ['$scope', '$resource', 'cityService', function ($scope, $resource, cityService) {
    $scope.city = cityService.city;
    $scope.weatherAPI = $resource(
      "https://api.openweathermap.org/data/2.5/forecast",
      { q: $scope.city, cnt: 2, appid: "REDACTED" },
      { 'query': { method: 'GET'} }
    );
    $scope.weatherResult = $scope.weatherAPI.query();
    $scope.convertToCelsius = function(degK) {
      return Math.round(degK - 273.15);
    };
    $scope.convertToDate = function(dt) {
      return new Date(dt);
    };
  }]
);
