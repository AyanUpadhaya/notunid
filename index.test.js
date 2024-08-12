const { randomNumber } = require("./index");

//no value provided - default values get used
console.log("No value: "+ randomNumber())

// spcified range
console.log("Specified: "+ randomNumber(10,20))

//one value - one value becomes end value
console.log("One value: ",randomNumber(27))

//same value - returns same value
console.log('Same value: '+randomNumber(7,7))

//float value -returns base 10
console.log("Float value: "+randomNumber(5.6,15.6))