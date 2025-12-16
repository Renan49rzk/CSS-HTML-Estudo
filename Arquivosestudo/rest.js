const sum = (...rest) => {

};
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
console.log(sum(5, 5, 5, 2, 3));