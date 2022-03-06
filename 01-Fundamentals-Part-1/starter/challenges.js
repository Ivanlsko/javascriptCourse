//<------------------------------ Coding Challenge #1 ------------------------------ >//

/* const marksMass = 78;
const marksHeight = 1.69;
const marksBMI = marksMass / marksHeight ** 2;
console.log(marksBMI);

const johnsMass = 92;
const johnsHeight = 1.95;
const johnsBMI = johnsMass / johnsHeight ** 2;
console.log(johnsBMI);

//There is no need of using if statements
const markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI); */

//<------------------------------ Coding Challenge #2 ------------------------------ >//

/* if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
} else {
  console.log(`Mark's BMI (${marksBMI}) is lower than John's (${johnsBMI})!`);
} */

//<------------------------------ Coding Challenge #3 ------------------------------ >//

const koalasFirstScore = 109;
const koalasSecondScore = 95;
const koalasThirdScore = 123;
const koalasAverage = (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;
console.log(koalasAverage);

const dolphinsFirstScore = 97;
const dolphinsSecondScore = 112;
const dolphinsThirdScore = 101;
const dolphinsAverage = (dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3;
console.log(dolphinsAverage);

if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log("Team Koalas Wins!");
} else if (dolphinsAverage >= 100) {
  console.log("Team Dolphins Wins");
} else {
  console.log("There is no winner of this game. The requirement of minimium 100 points wasn't fulfilled");
}
