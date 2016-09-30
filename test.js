let assert = require('assert');
let filter = require('./public/components/filter').filter;
let plural = require('./public/components/plural').plural;
let pluralize = require('./public/components/pluralize').pluralize;
let hello = require('./public/components/hello').hello;



assert.equal(hello('Test', 6), 'Привет, Test! Вы авторизировались у нас уже 6 раз!');

assert.equal(plural(0), 'раз');
assert.equal(plural(1), 'раз');
assert.equal(plural(2), 'раза');
assert.equal(plural(13), 'раз');
assert.equal(plural(15), 'раз');
assert.equal(plural(100), 'раз');

assert.equal(pluralize('eng', ['time', 'times'], 1), 'time');
assert.equal(pluralize('eng', ['time', 'times'], 2), 'times');

global.window = {
	rules: ['apple', 'orange']
};

assert.equal(filter('apple'), '*****');
assert.equal(filter('appleJuice'), '*****Juice');
assert.equal(filter('appleapple'), '**********');
assert.equal(filter('appleorange'), '***********');
assert.equal(filter('orangeorangeappleapple'), '**********************');
assert.equal(filter('apple'), '*****');
