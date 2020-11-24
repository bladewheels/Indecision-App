console.log('Person is available.');

export const isAdult = (age) => age >= 18;
export const canDrinkAlcohol = (age) => isAdult(age);

// A single default export per file, multiple named exports OK
// export { square, add }
export default (age) => age >= 65;