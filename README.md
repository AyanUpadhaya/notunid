# notunid

A simple and reliable package for generating unique IDs. Useful for any project where unique identifiers are needed.

## Installation

You can install the package using npm:

```sh
npm install notunid
``` 

### Usage

``` js
const { randomIdGenerate, randomTextGenerate } = require('notunid');

// Generate a unique ID of length 12
// argument is optional default length = 12
const uniqueId = randomIdGenerate(12);
console.log(`Generated Unique ID: ${uniqueId}`);

// Generate a unique ID with an invalid length (default length will be used)
const invalidUniqueId = randomIdGenerate("invalid");
console.log(`Generated Unique ID with default length: ${invalidUniqueId}`);

// Generate a random text string of length 8
// argument is optional default length = 10
const randomText = randomTextGenerate(8);
console.log(`Generated Random Text: ${randomText}`);

// Generate a random text string with an invalid length (default length will be used)
const invalidRandomText = randomTextGenerate("invalid");
console.log(`Generated Random Text with default length: ${invalidRandomText}`);

```
