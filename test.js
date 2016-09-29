let assert = require('assert');
//let hello = require('./public/main').hello;
let filter = require('./public/components/filter').filter;



//assert.equal(hello('Test'), 'Привет, Test');
//TODO: Кейсы для функции filter
// assert.equal(filter('КЕК'), '***');
global.window = {
  rules: ['apple', 'orange']
}
console.log(filter('apple'));
assert.equal(filter('apple'), '*****');
