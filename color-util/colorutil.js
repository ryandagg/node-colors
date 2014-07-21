var luminosity = function(r, g, b) {
	return 0.2126*r + 0.7152*g + 0.0722*b;
}

var darken = function(r, g, b) {
	// console.log(r*0.8, g*0.8, b*0.8);
	return String(Math.round(r*0.8 * 10) / 10) + ", " + String(Math.round(g*0.8 * 10) / 10)+ ", " + String(Math.round(b*0.8 * 10) / 10);
}

module.exports = {
	luminosity: luminosity,
	darken: darken
};