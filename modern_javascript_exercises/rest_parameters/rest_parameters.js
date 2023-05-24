// Instructions can be found in rest_parameters.md


const add = (...numbers) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

export default add;