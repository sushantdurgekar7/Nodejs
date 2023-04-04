// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./ch4-names");
const sayHi = require("./ch5-utils");
const data = require("./ch6-alternative-flavor");
require("./ch7-mind-grenade");
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
