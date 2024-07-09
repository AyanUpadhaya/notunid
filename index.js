const crypto = require("crypto");

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

module.exports = { randomTextGenerate, randomIdGenerate };
