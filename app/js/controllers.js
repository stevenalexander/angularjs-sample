'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', []);

appControllers.controller('personsCtrl', ['$scope',
  function($scope) {
    $scope.persons = [];
  }]);

appControllers.controller('personCtrl', ['$scope', '$routeParams',
  function($scope) {
    $scope.person = {};
  }]);