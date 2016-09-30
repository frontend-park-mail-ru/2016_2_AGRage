function pluralize(lang, formsOfCurWord, count) {
	switch (lang) {
		case "rus":
			var strangeNum1 = [12, 13, 14];
			var strangeNum2 = [2, 3, 4];
			if (strangeNum1.indexOf(numOfVisits) != -1) return formsOfCurWord[0];
			else if (strangeNum2.indexOf(numOfVisits % 10) != -1) return formsOfCurWord[1];
			else return formsOfCurWord[2];
			break;
		case "eng":
			if (count == 1) return formsOfCurWord[0];
			else return formsOfCurWord[1];
			break;
		default:
			return "No such language";
	}
}

if (typeof exports === "object") {
	exports.pluralize = pluralize;
	//	exports.filter = filter;
}
