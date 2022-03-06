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
