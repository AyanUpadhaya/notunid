# notunid

A simple and reliable package for generating unique IDs. Useful for any project where unique identifiers are needed.

## Installation

You can install the package using npm:

```sh
npm install notunid
``` 

## Usage

``` js
const { randomIdGenerate, randomTextGenerate, randomNumber, randomChoice, randomShuffle } = require('notunid');

// Generate a unique ID of length 12
// Argument is optional, default length = 12
const uniqueId = randomIdGenerate(12);
console.log(`Generated Unique ID: ${uniqueId}`);

// Generate a unique ID with an invalid length (default length will be used)
const invalidUniqueId = randomIdGenerate("invalid");
console.log(`Generated Unique ID with default length: ${invalidUniqueId}`);

// Generate a random text string of length 8
// Argument is optional, default length = 10
const randomText = randomTextGenerate(8);
console.log(`Generated Random Text: ${randomText}`);

// Generate a random text string with an invalid length (default length will be used)
const invalidRandomText = randomTextGenerate("invalid");
console.log(`Generated Random Text with default length: ${invalidRandomText}`);

/** Version 2 new functions */

//=============Generate a random number starts============
// Desc: Generate a random number within a specified range
// Argument is optional, default range = 10

// different use case
//= no value provided - default values get used
const randomNum = randomNumber();
console.log("No value: "+ randomNum)

//= spcified range
const randomNum = randomNumber(10,20);
console.log("Specified: "+ randomNum)

//= one value - one value becomes end value
const randomNum = randomNumber(27);
console.log("One value: "+ randomNum)

//= same value - returns same value
const randomNum = randomNumber(7,7);
console.log("Same: "+ randomNum)

//= float value -returns base 10
const randomNum = randomNumber(5.6,15.6);
console.log("Float: "+ randomNum)

//===========Generate a random number ends============


//=========== Get a random value from an array starts ============

const choiceArray = [1, 2, 3, 4, 5];
const randomChoiceValue = randomChoice(choiceArray);
console.log(`Random Choice from Array: ${randomChoiceValue}`);

//=========== Get a random value from an array emds ============



// ========Get a shuffled array from an array start =============

const shuffleArray = [1, 2, 3, 4, 5];
const shuffledArray = randomShuffle(shuffleArray);
console.log(`Shuffled Array: ${shuffledArray}`);

// ========Get a shuffled array from an array ends =============

```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.
