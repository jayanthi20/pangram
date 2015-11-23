'use strict';
var pangram=require('../index.js')

describe('check if the sentence is pangram', function () {
	
 it("non pangram sentence as input", function (done) {
   pangram("i love india",function(result){result.should.equal("It is not a pangram sentence");done();});
 });

it("pangram sentence as input", function (done) {
   pangram("The quick brown fox jumps over the lazy dog",function(result){result.should.equal("It is a pangram sentence");done();});
 });

});