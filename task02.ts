// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)

//const userInput = "42";
// Try changing to "hello", 10, null, NaN
const userInput = "52";


if (typeof userInput === "number") {
  console.log("It's a number");
} else {
  console.log("Not a number");
}