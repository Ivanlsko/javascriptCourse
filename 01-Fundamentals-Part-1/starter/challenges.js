"use strict";
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

/* const koalasFirstScore = 109;
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
} */

//<------------------------------ Coding Challenge #4 ------------------------------ >//

/* const bill = 430; // 40 430
const tip = bill >= 50 && bill <= 300 ? "15" : "20";

console.log(`Your bill is ${bill}€, therefore, you should tip ${tip}%`);
console.log(`To sum it up, you end up paying ${bill + (bill / 100) * tip}€`);
 */

//<------------------------------ Coding Challenge #5 ------------------------------ >//

/* const chceckWinner = function () {
  const avgDolphins = calcAverage(44, 23, 71);
  console.log(avgDolphins);
  const avgKoals = calcAverage(65, 54, 49);
  console.log(avgKoals);

  if (avgDolphins >= 2 * avgKoals) {
    console.log("Dolphins are winner");
  } else if (avgKoals >= 2 * avgDolphins) {
    console.log("Koalas are winner");
  } else {
    console.log("No one is winner here");
  }
};

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
console.log(calcAverage(1, 2, 3));

chceckWinner();
 */

//<------------------------------ Coding Challenge #6 ------------------------------ >//

/* function calculateTip(bill) {
  if (bill <= 50 || bill >= 300) {
    return (bill / 100) * 20;
  } else {
    return (bill / 100) * 20;
  }
}

const bills = [125, 555, 44];

const tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];

const billsWithTips = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`${billsWithTips[0]}€, ${billsWithTips[1]}€, ${billsWithTips[2]}€`); */
