/* global describe, it */

'use strict';

var expect = require('chai').expect;
var traceur = require('traceur');
var Calculator = traceur.require(__dirname + '/../../app/models/calculator.js');

describe('Calculator', function() {
  describe('.add', function() {
    it('should add two numbers', function() {
      var sum = Calculator.add(2,3);
      expect(sum).to.equal(5);
    });
  });

  describe('.subtract', function(){
    it('should find difference between two numbers', function(){
      var difference = Calculator.subtract(3,2);
      expect(difference).to.equal(1);

      var diff = Calculator.subtract(-4,-2);
      expect(diff).to.equal(-2);
    });
  });

  describe('.pow', function(){
    it('should find the power of two numbers', function(){
      var pow = Calculator.power(2,3);
      expect(pow).to.equal(8);
    });
  });

  describe('.sum', function(){
    it('should add up a list of numbers', function(){
      var sum = Calculator.sum([1,2,3,4,5]);
      expect(sum).to.equal(15);
    });
  });

  describe('.addTwoFractions', function(){
    it('should add up two fractions', function(){
      var fraction = Calculator.addTwoFractions('1/3', '2/4');
      expect(fraction).to.equal('10/12');
    });
  });

  describe('.addFractions', function(){
    it('should add up fractions', function(){
      var fraction = Calculator.addFractions('1/3', '2/4', '3/5');
      expect(fraction).to.equal('86/60');
    });
  });
});
