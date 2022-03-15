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

/*function calculateTip(bill) {
  if (bill <= 50 && bill >= 300) {
    return (bill / 100) * 20;
  } else {
    return (bill / 100) * 20;
  }
}*/

/* function calculateTip(bill) {
  return bill <= 50 && bill >= 300 ? (bill / 100) * 20 : (bill / 100) * 15;
}

const bills = [125, 555, 44];

const tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];

const billsWithTips = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`${billsWithTips[0]}€, ${billsWithTips[1]}€, ${billsWithTips[2]}€`); */

//<------------------------------ Coding Challenge #7 ------------------------------ >//

/* const mark = {
  fullName: "Mark Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};

function compareBMIs() {
  return mark.calcBMI() > john.calcBMI() ? "higher" : "lower";
}

console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is ${compareBMIs()} than ${john.fullName}'s (${john.calcBMI()})!`);
 */

//<------------------------------ Coding Challenge #8 ------------------------------ >//

/* const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(bills[i] <= 50 && bills[i] >= 300 ? (bills[i] / 100) * 20 : (bills[i] / 100) * 15);
  totals.push(bills[i] + tips[i]);
}

console.log(totals);

function calcAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(totals)); */
