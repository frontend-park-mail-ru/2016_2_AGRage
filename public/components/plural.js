
function plural (numOfVisits){
	var strangeNum1 = [12, 13, 14];
	var strangeNum2 = [2, 3, 4];
	if (strangeNum1.indexOf(numOfVisits) != -1) return "раз";
	else if (strangeNum2.indexOf(numOfVisits % 10) != -1) return "раза";
	else return "раз";
}

if(typeof exports === "object"){
	exports.plural = plural;
//	exports.filter = filter;
}
