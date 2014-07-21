var colorutil = require("./colorutil.js");

var darker = colorutil.darken(process.argv[2], process.argv[3], process.argv[4]);

console.log(darker);