var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {

});

var searchPeople = function searchPeople(firstName, lastName, height, age, occupation) {
  return 'Jane Doe';
};

var searchPeopleString = searchPeople.toString();
console.log(searchPeopleString);
