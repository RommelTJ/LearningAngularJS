weatherApp.service('cityService', function() {
  this.city = "San Diego";
});

weatherApp.service('weatherService', ['$resource', function($resource) {
  this.GetWeather = function(city, days) {
    const weatherAPI = $resource(
      "https://api.openweathermap.org/data/2.5/forecast",
      { q: city, cnt: days, appid: "REDACTED" },
      { 'query': { method: 'GET'} }
    );
    return weatherAPI.query();
  };
}]);
