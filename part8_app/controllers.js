weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
  $scope.city = cityService.city;
  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  })
}]);

weatherApp.controller(
  'forecastController',
  ['$scope', '$resource', '$routeParams', 'cityService', function ($scope, $resource, $routeParams, cityService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    $scope.weatherAPI = $resource(
      "https://api.openweathermap.org/data/2.5/forecast",
      { q: $scope.city, cnt: $scope.days, appid: "REDACTED" },
      { 'query': { method: 'GET'} }
    );
    $scope.weatherResult = $scope.weatherAPI.query();
    $scope.convertToCelsius = function(degK) {
      return Math.round(degK - 273.15);
    };
    $scope.convertToDate = function(dt) {
      // datetime from OpenWeatherMap comes in milliseconds
      return new Date(dt * 1000);
    };
  }]
);