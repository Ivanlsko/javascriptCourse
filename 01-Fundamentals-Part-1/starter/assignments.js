"use strict";

/* 1. Declarevariablescalled'country','continent'and'population'and assign their values according to your own country (population in millions)
2. Logtheirvaluestotheconsole */

/* const country = "Slovakia";
const continent = "Europe";
let population = 5500000;
const language = "Slovak";
console.log(country + " " + continent + " " + population); */

///////////

/* 1. Declareavariablecalled'isIsland'andsetitsvalueaccordingtoyour country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
2. Logthetypesof'isIsland','population','country'and'language' to the console */

/* const isIsland = false;
const language = "Slovak";

console.log(typeof isIsland + " " + population + " " + country + " " + language); */

//<--------------------LECTURE: Strings and Template Literals---------------------- >//

/* 1. Recreatethe'description'variablefromthelastassignment,thistime using the template literal syntax
 */

/* const description = `${country} is a part of ${continent} and is habitated by ${population} people`;
console.log(description); */

//<--------------------LECTURE: Taking Decisions: if / else Statements---------------------- >//

/* let difference;
if (population > 33000000) {
  console.log(`${country}'s population is above average`);
} else {
  difference = 33000000 - population;
  console.log(`${country}'s population is ${difference} below world's average`);
} */

//<--------------------LECTURE: Type Conversion and Coercion---------------------- >//

/* 1. Predicttheresultofthese5operationswithoutexecutingthem:
     '9' - '5'; // 4 as a number
     '19' - '13' + '17'; // "617" as a string
     '19' - '13' + 17; // 23 as a number
     '123' < 57; // false
     5 + 6 + '4' + 9 - 4 - 2; // 1143 as a number
2. Executetheoperationstocheckifyouwereright */

/* console.log("9" - "5", "19" - "13" + "17", "19" - "13" + 17, "123" < 57, 5 + 6 + "4" + 9 - 4 - 2);
 */

//<--------------------LECTURE: Equality Operators: == vs. ===---------------------- >//

/* const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
if (numNeighbours === 1) console.log("Only 1 border");
else if (numNeighbours > 1) console.log("There is more than 1 border");
else console.log("No borders"); */

//<--------------------LECTURE: Logical Operators---------------------- >//

/* const country = "Canada";
const continent = "America";
let population = 5500000;
const language = "English";
const isIsland = false;

if (language === "English" && population < 50000000 && isIsland === false) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`You shouldn't live in ${country}`);
}
 */

//<--------------------LECTURE: The switch Statement---------------------- >//

/* const day = "sunday";

if (day === "monday") {
  console.log("It's monday!");
} else if (day === "tuesday") {
  console.log("It's tuesday");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Middle of the week! Friday incoming");
} else if (day === "friday") {
  console.log("It's friiidaaay niight");
} else if (day === "saturday" || day === "sunday") {
  console.log("Let's enjoy the weekend");
} else {
  console.log("The value is invalid");
}

const language = "Chinese";

switch (language) {
  case "Chinese":
    console.log("MOST number of native speakers");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3nd place in number of native speakers");
    break;
  default:
    console.log("Awesome language!");
} */

//<--------------------LECTURE: Functions---------------------- >//

/* function describeCountry(country, population, capitalCity) {
  console.log(`${country} has ${population} people and its capital city is ${capitalCity}`);
}

describeCountry("Finland", 6000000, "Helsinky");
describeCountry("Slovakia", 5500000, "Bratislava");
describeCountry("Usa", 300000000, "Washington");
 */

//<--------------------LECTURE: Function Declarations vs. Expressions---------------------- >//

/* function percentageOfWorld1(population) {
  return (population / 790000000) * 100;
}
//Declaration
const country1 = percentageOfWorld1(140000000);
console.log(country1);

//Expression
const percentageOfWorld2 = function (population) {
  return (population / 790000000) * 100;
};

console.log(percentageOfWorld2(100000));
 */

//<--------------------LECTURE: Arrow Functions---------------------- >//

/* const percentageOfWorld3 = (population) => (population / 790000000) * 100;
console.log(percentageOfWorld3(24000000)); */

//<--------------------LECTURE: Functions Calling Other Functions---------------------- >//

/* const descibePopulation = function (country, population) {
  console.log(`${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world`);
};

const percentageOfWorld3 = (population) => (population / 790000000) * 100;
descibePopulation("USA", 30000000); */

//<--------------------LECTURE: Introduction to Arrays---------------------- >//

/* 
const populations = [440000, 34000000, 1234567, 100000000];
if (populations.length >= 3) console.log("Array has 4 elements");

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

function percentageOfWorld1(population) {
  return (population / 790000000) * 100;
} */

//<--------------------LECTURE: Basic Array Operations (Methods)---------------------- >//

/* const neighboursOfSlovakia = ["Ukraine", "Hungary", "Poland", "Czech Republic", "Austria"];
neighboursOfSlovakia.push("Utopia");
console.log(neighboursOfSlovakia);

neighboursOfSlovakia.pop(neighboursOfSlovakia[neighboursOfSlovakia.length]);
console.log(neighboursOfSlovakia);

if (neighboursOfSlovakia.includes("Germany") === true) {
  console.log("Central European Country");
} else {
  console.log("Not a Central European Country");
}

const position = neighboursOfSlovakia.indexOf("Czech Republic");
neighboursOfSlovakia[position] = "Czechia";
console.log(neighboursOfSlovakia); */

//<--------------------LECTURE: Introduction to Objects---------------------- >//

/* const myCountry = {
  country: "Slovakia",
  language: "Slovak",
  population: 5500000,
  capital: "Bratislava",
  neighbours: ["Ukraine", "Hungary", "Poland", "Czech Republic", "Austria"],
};

console.log(myCountry); */

//<--------------------LECTURE: Dot vs. Bracket Notation---------------------- >//

/* const myCountry = {
  country: "Slovakia",
  language: "slovak",
  population: 5500000,
  capital: "Bratislava",
  neighbours: ["Ukraine", "Hungary", "Poland", "Czech Republic", "Austria"],
};

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2000000;
console.log(myCountry["population"]);

myCountry["population"] -= 2000000;
console.log(myCountry["population"]); */

//<--------------------LECTURE: Object Methods---------------------- >//

/* const myCountry = {
  country: "Slovakia",
  language: "slovak",
  population: 5500000,
  capital: "Bratislava",
  neighbours: ["Ukraine", "Hungary", "Poland", "Czech Republic", "Austria"],
  describe: function () {
    console.log(`${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
  },
  checkIfIsland: function (neighbours) {
    this.isIsland = neighbours.length >= 0 ? "Isn't an Island" : "Is an Island";
    return this.isIsland;
  },
}; */

/* const myCountry = {
  country: "Slovakia",
  language: "slovak",
  population: 5500000,
  capital: "Bratislava",
  neighbours: ["Ukraine", "Hungary", "Poland", "Czech Republic", "Austria"],
  describe: function () {
    console.log(`${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
  },
  checkIfIsland: function () {
    this.isIsland = this.neighbours.length >= 0 ? "Isn't an Island" : "Is an Island";
    return this.isIsland;
  },
};
 */

//<--------------------LECTURE: Iteration: The for Loop---------------------- >//

/* for (let num = 1; num <= 50; num++) {
  console.log(`Voter number ${num} is currently voting`);
} */

//<--------------------LECTURE: Looping Arrays, Breaking and Continuing---------------------- >//

/* const populations = [440000, 34000000, 1234567, 100000000];
const percentageOfWorld = [];
for (let i = 0; i <= populations.length; i++) {
  percentageOfWorld.push((populations[i] / 790000000) * 100);
}
console.log(percentageOfWorld);
 */
