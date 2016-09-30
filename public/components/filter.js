(function () {
  'use strict';


  function filter(str) {
    let rules = window.rules;
    rules = rules.map(rule=>{
      return {
        regexp : `/${rule}/g`,
        length: rule.length
      };
    })
    rules.forEach(rule=> {
      str.replace(/apple//*rule.regexp*/, "*"/*(new Array(rule.length + 1)).join('*')*/)
      console.log(str);
    });
    return (str);
  }
  if (typeof exports === 'object') {
    exports.filter = filter;
  }
})();
