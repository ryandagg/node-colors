luminosity = 0.2126*process.argv[2] + 0.7152*process.argv[3] + 0.0722*process.argv[4];

var isLight = function() {
	if(luminosity > 155) {
		console.log("light");
		return "light";
	}
	else {
		console.log("dark");
		return "dark";
	}

isLight();

// export {
// 	luminosity: luminosity,
// 	isLight: isLight
// }