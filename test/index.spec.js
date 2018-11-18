'use strict';

var expect = require('chai').expect;
var npm-mod-start = require('../index');

describe('npm-mod-start', function() {
  it('return the string "This is the npm module starter kit"', function() {
    var result = npm-mod-start;
    expect(result).to.equal('This is the npm module starter kit');
  });