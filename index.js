const crypto = require("crypto");

// random text generate
function randomTextGenerate(length = 10) {
  // Validate length to ensure it is a positive integer
  if (typeof length !== "number" || length <= 0 || !Number.isInteger(length)) {
    length = 10; // Set to default value if invalid
  }

  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
//random id generate
function randomIdGenerate(length = 12) {
  // Validate length to ensure it is a positive integer
  if (typeof length !== "number" || length <= 0 || !Number.isInteger(length)) {
    length = 12; // Set to default value if invalid
  }

  const randomBytes = crypto.randomBytes(32).toString("hex");
  const inputText = randomTextGenerate(length) + randomBytes;
  const result = Buffer.from(inputText, "utf8").toString("hex");
  return result.slice(0, length);
}

//generate random number

function randomNumber(start = 0, end = 10) {
  // Ensure start and end are integers
  start = parseInt(start, 10);
  end = parseInt(end, 10);

  // Handle case where only one value is provided
  if (end === start) {
    return start;
  }

  // Ensure start is less than end
  if (start > end) {
    [start, end] = [end, start];
  }

  return Math.floor(Math.random() * (end - start + 1)) + start;
}

//random value choice from array

function randomChoice(arr = []) {
  const arrayLength = arr.length;
  if (arrayLength == 0) return [];
  const getRandomValue = randomNumber(arrayLength)

  return arr[getRandomValue];
}

//get random shuffled values from array

function randomShuffle(arr = []) {
  const arrayLength = arr.length;
  if (arrayLength == 0) return [];

  const arrayString = JSON.stringify(arr);
  const coppiedArray = JSON.parse(arrayString);

  const shuffledArray = [];

  while (shuffledArray.length !== arrayLength) {
    const getRandomValue = randomNumber(arrayLength);
    if (!shuffledArray.includes(coppiedArray[getRandomValue])) {
      shuffledArray.push(coppiedArray[getRandomValue]);
    }
  }

  return shuffledArray;
}

module.exports = {
  randomTextGenerate,
  randomIdGenerate,
  randomNumber,
  randomChoice,
  randomShuffle,
};
