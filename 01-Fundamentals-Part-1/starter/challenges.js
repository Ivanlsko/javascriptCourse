//<------------------------------ Coding Challenge #1 ------------------------------ >//

const marksMass = 78;
const marksHeight = 1.69;
const marksBMI = marksMass / marksHeight ** 2;
console.log(marksBMI);

const johnsMass = 92;
const johnsHeight = 1.95;
const johnsBMI = johnsMass / johnsHeight ** 2;
console.log(johnsBMI);

//There is no need of using if statements
const markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);

//<------------------------------ Coding Challenge #2 ------------------------------ >//

if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
} else {
  console.log(`Mark's BMI (${marksBMI}) is lower than John's (${johnsBMI})!`);
}
