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
  $scope.people = [
    { name: "John Doe", address: "555 Main St.", city: "New York", state: "NY", zipCode: "11111" },
    { name: "Jane Doe", address: "333 Second St.", city: "Buffalo", state: "NY", zipCode: "22222" },
    { name: "George Doe", address: "111 Third St.", city: "Miami", state: "FL", zipCode: "33333" }
  ];

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
    },
    transclude: true
    // link: function(scope, elements, attrs) {
    //   // This is a short-hand for compile -> post-link.
    //   if (scope.personObject.name === "John Doe") {
    //     elements.removeAttr("class");
    //   }
    // }
    // compile: function(elem, attrs) {
    //   // Runs only once.
    //   // console.log("Compiling...", elem);
    //   return {
    //     pre: function(scope, elements, attrs) {
    //       // Runs pre-link for every element. Not very safe.
    //      //  console.log("Pre-linking...", elements);
    //     },
    //     post: function(scope, elements, attrs) {
    //       // Runs post-link for every element after DOM has been mutated.
    //       // console.log("Post-linking...", elements);
    //       if (scope.personObject.name === "Jane Doe") {
    //         elements.removeAttr("class");
    //       }
    //     },
    //   };
    // }
  };
});
