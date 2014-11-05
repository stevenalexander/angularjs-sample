'use strict';

describe('app', function() {

  it('should redirect index.html to index.html#/persons', function() {
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/persons');
      });
  });


  describe('persons view', function() {

    beforeEach(function() {
      browser.get('app/index.html#/persons');
    });


    it('should display persons', function() {
      expect(true).toBe(true);
    });
  });


  describe('person view', function() {

    beforeEach(function() {
      browser.get('app/index.html#/person/1');
    });


    it('should display person', function() {
      expect(true).toBe(true);
    });
  });
});
