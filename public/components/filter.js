(function () {
  'use strict';


  function filter(str) {
    let rules = window.rules;
    rules = rules.map(rule=>{
      return {
        regexp : new RegExp(`\\b${rule}\\b`,'g'),
        length: rule.length
      };
    })
    rules.forEach(rule=> {
      str.replace(rule.regexp, (new Array(rule.length + 1)).join('*'))
    });
    return (str);
  }
  if (typeof exports === 'object') {
    exports.filter = filter;
  }
})();
