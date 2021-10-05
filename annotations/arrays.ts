// If we're going to initialize our array with some contents already inside of it
// we dont need type annotation
const carMakers = ["ford", "toyota", "chevy"];

const someCars = [["raptor"], ["camry", "camaro"]];

// Flexible types
// (we don't need type annotation, example below just express how we put multiple different types of values into one single array)
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
