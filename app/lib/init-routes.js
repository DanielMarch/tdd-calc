'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var calculator = traceur.require(__dirname + '/../routes/calculator.js');

  app.get('/', dbg, home.index);
  app.post('/add', dbg, calculator.add);
  app.post('/subtract', dbg, calculator.subtract);
  app.post('/multiply', dbg, calculator.multiply);
  app.post('/divide', dbg, calculator.divide);
  app.post('/power', dbg, calculator.pow);
  app.post('/sum', dbg, calculator.sum);
  app.post('/frac', dbg, calculator.frac);
  console.log('Routes Loaded');
  fn();
}
