let assert = require('assert');
let plural = require('./public/components/plural').plural;
let pluralize = require('./public/components/pluralize').pluralize;
let hello = require('./public/components/hello').hello;
let chat = require('./public/components/chat/chat.js');
//
//
//
assert.equal(hello('Test', 6), 'Привет, Test! Вы авторизировались у нас уже 6 раз!');
//
//
assert.equal(plural(0), 'раз');
assert.equal(plural(1), 'раз');
assert.equal(plural(2), 'раза');
assert.equal(plural(13), 'раз');
assert.equal(plural(15), 'раз');
assert.equal(plural(100), 'раз');
//
//
assert.equal(pluralize('eng', ['time', 'times'], 1), 'time');
assert.equal(pluralize('eng', ['time', 'times'], 2), 'times');
//
//
let rules = ['apple', 'orange'];

let tempChat = new chat.Chat({});

assert.equal(tempChat.filter('apple', rules), '*****');
assert.equal(tempChat.filter('appleJuice', rules), '*****Juice');
assert.equal(tempChat.filter('appleapple', rules), '**********');
assert.equal(tempChat.filter('appleorange', rules), '***********');
assert.equal(tempChat.filter('orangeorangeappleapple', rules), '**********************');
assert.equal(tempChat.filter('apple', rules), '*****');
