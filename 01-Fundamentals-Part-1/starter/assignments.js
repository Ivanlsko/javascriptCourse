/* 1. Declarevariablescalled'country','continent'and'population'and assign their values according to your own country (population in millions)
2. Logtheirvaluestotheconsole */

const country = "Slovakia";
const continent = "Europe";
let population = 5500000;
console.log(country + " " + continent + " " + population);

///////////

/* 1. Declareavariablecalled'isIsland'andsetitsvalueaccordingtoyour country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
2. Logthetypesof'isIsland','population','country'and'language' to the console */

const isIsland = false;
const language = "Slovak";

console.log(typeof isIsland + " " + population + " " + country + " " + language);

//<--------------------LECTURE: Strings and Template Literals---------------------- >//

/* 1. Recreatethe'description'variablefromthelastassignment,thistime using the template literal syntax
 */

const description = `${country} is a part of ${continent} and is habitated by ${population} people`;
console.log(description);
