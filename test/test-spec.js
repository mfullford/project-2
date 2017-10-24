//require chai
const expect = require('chai').expect;
const request = require('request');

// My URL with my api
var baseURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDkVV9oxUvanUOsvlHPAVp9ru6wf-ZysNY&callback=initMap';

// Test the map to see if it is working
describe("API test", function () {
	request(baseURL, function (error, response, body) { 
		it("should receive a 200/OK HTTP status code", function () {
			expect(response.statusCode).to.equal(200);
		});
		done();
	});
});

// Test the server to make sure that is also running
describe("Server should be running", function() {
	request('http://localhost:3000/', function(error, response, body) {
		it('Should receive a 200/OK HTTP status code', function(){
			expect(response.statusCode).to.equal(200);
		});
	});
});

