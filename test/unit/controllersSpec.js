'use strict';

/* jasmine specs for controllers go here */
describe('app controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('app'));

  describe('personsCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;

      scope = $rootScope.$new();
      ctrl = $controller('personsCtrl', {$scope: scope});
    }));


    it('should fetch persons', function() {
      expect(scope.persons.length).toEqualData(0);
    });
  });


  describe('personCtrl', function(){
    var scope, $httpBackend, ctrl;


    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;

      $routeParams.personId = '1';
      scope = $rootScope.$new();
      ctrl = $controller('personCtrl', {$scope: scope});
    }));


    it('should fetch person', function() {
      expect(scope.person).toEqualData({});
    });
  });
});
