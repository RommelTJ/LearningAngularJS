var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($scope, $log, $filter, $resource) {

    $scope.name = "John";
    $scope.formattedName = $filter("uppercase")($scope.name);

    $log.info(`Name: ${$scope.name}`);
    $log.info(`Formatted Name: ${$scope.formattedName}`);
    
});