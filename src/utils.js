console.log('Utils is available.');

export 
const square = (x) => x * x;

export 
const add = (a,b) => a + b;

export default (a,b) => a - b;

// A single default export per file, multiple named exports OK
// export { square, add, subtract as default }