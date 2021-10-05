const drink = {
  color: "red",
  carbonated: true,
  sugar: 40,
};
/**
 * By using this annotation below, we are saying that this array is going to always have a very consistent
 * ordering of elements inside of it
 */
const pepsi: [string, boolean, number] = ["red", true, 40]; // compare with const pepsi:(string | number | boolean)[] = ['red', true, 40]

// type alias
type Drink = [string, boolean, number];

const tea: Drink = ["blue", true, 2];
