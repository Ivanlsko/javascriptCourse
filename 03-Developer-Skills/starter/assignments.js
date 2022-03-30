//create array with the data given
//create a function that is
// add "C" behing the every number
// will calculate the day based on position in array
// will concatinate the day with the temperature

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

function createString(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += `ºC in ${i + 1} days...`;
  }
  console.log(arr.toString());
}

createString(temps1);
createString(temps2);
