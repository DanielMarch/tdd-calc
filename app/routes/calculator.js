'use strict';

var traceur = require('traceur');
var Calculator = traceur.require(__dirname + '/../models/calculator.js');

exports.add = (req, res)=>{
  var x = req.body.input1;
  var y = req.body.input2;
  Calculator.add(x, y);
};

exports.subtract = (req, res)=>{
  var x = req.body.input1;
  var y = req.body.input2;
  Calculator.subtract(x, y);
};

exports.multiply = (req, res)=>{
  var x = req.body.input1;
  var y = req.body.input2;
  Calculator.multiply(x, y);
};

exports.divide = (req, res)=>{
  var x = req.body.input1;
  var y = req.body.input2;
  Calculator.divide(x, y);
};

exports.pow = (req, res)=>{
  var x = req.body.input1;
  var y = req.body.input2;
  Calculator.power(x, y);
};

exports.sum = (req, res)=>{
  var string = req.body.input1;
  var x = [];
  x = string.split(',').map(function(item){return parseInt(item, 10);});
  Calculator.sum(x);
};

exports.frac = (req, res)=>{
  var string = req.body.input1;
  var x = [];
  x = string.split(',');
  Calculator.addFrac(x);
};
