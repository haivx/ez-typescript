/**
 * The colon and the word number in the Ex below => type annotation
 * Can be used with any type of value:
 *  - Primitive Types(number, boolean, void, undefined, string, symbol, null)
 *  - Object types (functions, classes, arrays, objects)
 */

const apples: number = 10; // number

const time: Date = new Date(); // Built in objects

const truths: boolean[] = [true, false, true, false]; // arrays

// classes
class Car {}

let car: Car = new Car();

// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
const logNumber: (i: number) => void = (i: number) => {};

//
const numberAboveZero: boolean | number = false;

/**
 * Any type essentially means that Typescript has no idea what type of value being return from function
 */

const json = '{"x": 10, "y": 20}';
const res = JSON.parse(json); // => { x: number; y: number }

const isBo = "false";
const res1 = JSON.parse(isBo); // => boolean

const stringNum = "4";
const res2 = JSON.parse(stringNum); // => number
