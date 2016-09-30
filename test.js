let assert = require('assert');
//let hello = require('./public/main').hello;
let filter = require('./public/components/filter').filter;
let plural = require('./public/components/plural').plural;
let pluralize = require('./public/components/pluralize').pluralize;
let hello = require('./public/components/hello').hello;



assert.equal(hello("Test", 6), "Привет, Test! Вы авторизировались у нас уже 6 раз!");

assert.equal(plural(0), "раз");
assert.equal(plural(1), "раз");
assert.equal(plural(2), "раза");
assert.equal(plural(13), "раз");
assert.equal(plural(15), "раз");
assert.equal(plural(100), "раз");

assert.equal(pluralize("eng",["time", "times"], 1), "time");
assert.equal(pluralize("eng",["time", "times"], 2), "times");


//assert.equal(hello('Test'), 'Привет, Test');
//TODO: Кейсы для функции filter
// assert.equal(filter('КЕК'), '***');
global.window = {
  rules: ['apple', 'orange']
}
//console.log(filter('apple'));
assert.equal(filter('apple'), 'apple');
