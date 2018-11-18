'use strict';

var expect = require('chai').expect;
var npmms = require('../index');

describe('npm-mod-start', function() {
  it('return the string "This is the npm module starter kit"', function () {
    var result = npmms();
    expect(result).to.equal('This is the npm module starter kit');
  });
});