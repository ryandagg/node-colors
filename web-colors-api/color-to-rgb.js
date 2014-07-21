var request = require("request");
var webColors = request("https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json", function(error, response, body) {
	if (!error && response.statusCode == 200) {
		// console.log(body) // Print the google web page.
		var parsed = JSON.parse(body);
		// console.log(parsed);
		var result;
		for(var i = 0; i < parsed.length; i++) {
			if(parsed[i].name === process.argv[2]) {
				result = parsed[i].rgb;
				break;
			}
		}
		if(result) {
			console.log(result);
		}
		else {
			console.log("Color not found. Check case.");
			process.exit(2);
		}
	}
	else {
		console.log("Reqest failed");
		process.exit(1);
	}
});

// console.log(webColors);