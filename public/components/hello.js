let plural = require('./plural').plural;
function hello (userName, numOfVisit){
	return "Привет, " + userName + "! Вы авторизировались у нас уже " + numOfVisit +" " + plural(numOfVisit) + "!";
}

if(typeof exports === "object"){
	exports.hello = hello;
//	exports.filter = filter;
}
