var b = function filter(str) {
	rules = window.rules;
	rules = rules.map(rule => {
		return {
			regexp: new RegExp(rule, 'g'),
			length: rule.length
		};
	});
	rules.forEach(rule => {
		str = str.replace(rule.regexp, new Array(rule.length + 1).join('*'));
	});
	return (str);
}
if (typeof exports === 'object') {
	exports.filter = b;
}
