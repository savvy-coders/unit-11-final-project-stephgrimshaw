const { getBtnAndShow } = require('../script.js')
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

describe("Displaying the Date and Time", function() {

    beforeEach(function() {
      // Create a mock div with id "time"
      var div = document.createElement('div');
      div.id = 'time';
      document.body.appendChild(div);
    });
  
    afterEach(function() {
      // Remove the mock div after each test
      document.body.removeChild(document.getElementById('time'));
    });
  
    it("should display the current date and time when getBtnAndShow is called", function() {
      getBtnAndShow(); // Assuming this calls the displayDateAndTime function
      var timeDiv = document.getElementById('time');
      expect(timeDiv.innerHTML).not.toBe('');
    });
  
  });
  