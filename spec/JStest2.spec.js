const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

describe("Clearing the Date and Time", function() {

  beforeEach(function() {
    // Create a mock div with id "time" and set some content
    var div = document.createElement('div');
    div.id = 'time';
    div.innerHTML = 'Some Date';
    document.body.appendChild(div);
  });

  afterEach(function() {
    // Remove the mock div after each test
    document.body.removeChild(document.getElementById('time'));
  });

  it("should clear the date and time when clearDateAndTime is called", function() {
    clearDateAndTime();
    var timeDiv = document.getElementById('time');
    expect(timeDiv.innerHTML).toBe('');
  });

});
