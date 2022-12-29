// EXERCISE_XP_1
const favorite_food = "rice";
const favorite_meal = "lunch";
console.log("I eat", favorite_food, "at every ",favorite_meal);

//EXERCISE_XP_2
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSerieslength = myWatchedSeries.length;
console.log(myWatchedSerieslength);
const myWatchedSeriesSentence=myWatchedSeries.toString();
console.log("I watched "+myWatchedSerieslength+" series :"+myWatchedSeriesSentence);

// part II
myWatchedSeries[2]="Friends"
myWatchedSeries.push("The badland")
myWatchedSeries.unshift("The casa of papel")
myWatchedSeries.splice(1,1);
let str="money heist";
console.log(str.substring(2,3));
console.log(myWatchedSeries);

//EXERCISE_XP_3
let temperature_celsius= prompt("Entre un nombre");
let temp = ((temperature_celsius/5)*9)+32;
alert(temperature_celsius+" °C is "+temp+" °F");

/*-----------EXERCIse_XP_4------------*/

//1-What will be the outcome of a + b in the first expression ?
//2-What will be the outcome of a + b in the second expression ?
//3-What is the value of c?

let c;
let a = 34;
let b = 21;
 //Prediction: It will output 55, because 34 and 21 are numbers
 console.log(a+b);
// Actual:55
a = 2;
//Prediction: It will output 23, because 2 and 21 are numbers
console.log(a+b);
//actual: 23
 
//3-What is the value of c?

// prediction: The value of c is undefined, because it not get any number.
console.log(c);
// actual: undefined

//4-Analyse the code below, what will be the outcome?
//prediction: It will output 75, because 3 and 4 are numbers but 5 is string. we add the numbers and we concat them with the string
console.log(3 + 4 + '5');
//actual: 75

/*--------------Exercise_XP_5---------------*/
typeof(15);

// Prediction: It is an object, because it returns an object
// Actual: number
console.log(typeof(15));

typeof(5.5);
// Prediction: It is a double, because it is a decimal number
// Actual: 5.5
console.log(typeof(5.5));

typeof(NaN);
// Prediction: It is not a number, because we can't calculate  
// Actual:NaN
console.log(typeof(NaN));

typeof("hello")
// Prediction: it is a greeting, because it's not a number but it value is string 
// Actual:string
console.log(typeof("hello"));
//------------------------------------------------
typeof(true)
// Prediction: ok because it allow to execute an action
// Actual: boolean
console.log(typeof(true));
//-------------------------------------------------
typeof(1 != 2)
// Prediction: inequality because it's boolean value 
// Actual: boolean
console.log(typeof(1 != 2));
//------------------------------------------------
"hamburger" + "s"
// Prediction: Hamburgers bescause hamburger is concat with s
// Actual: string
console.log("hamburger" + "s");
//------------------------------------------------

"hamburgers" - "s"
// Prediction:It is not a number because we can't calculate
// Actual:NAN
console.log("hamburgers" - "s");
//-----------------------------------------------
"1" + "3"
// Prediction: string  because they are concate them 
// Actual: 13
console.log("1" + "3");
//-----------------------------------------------
"1" - "3"
// Prediction:-2 because it's two string
// Actual: -2
console.log("1" - "3");
//-------------------------------------------------
"johnny" + 5
// Prediction: It will ouput Johnny5 because it's a concat
// Actual: Johnny5
console.log("johnny"+5);
//-------------------------------------------------
"johnny" - 5
// Prediction: It's not a number because we have string and number so that can not be possible
// Actual:NaN
console.log("johnny" - 5);
//-------------------------------------------------
99 * "hello"
// Prediction: It's not a number because we have string and number so that can not be possible
// Actual:NaN
console.log(99 * "hello");
//-------------------------------------------------
1 != 1
// Prediction: False because 1==1
// Actual: False
console.log(1 != 1);
//-------------------------------------------------
1 == "1"
// Prediction: True because they are the same value 
// Actual: True
console.log(1 == "1");
//-------------------------------------------------
1 === "1"
// Prediction: False because it's not the same type
// Actual: False
console.log(1 === "1");
//-------------------------------------------------

/*---------------Exercise_XP_6-----------------*/
5 + "34"
// Prediction: 534 because it's concatenate
// Actual: 534
console.log(5 + "34")
//---------------------------------------------------
5 - "4"
// Prediction: -29 because it see the both as the number
// Actual:-29
console.log(5 - "34")
//----------------------------------------------------
10 % 5
// Prediction: 0 for it's the rest of division
// Actual: 0
console.log(10 % 5);
//---------------------------------------------------
5 % 10
// Prediction: 5 because it sees it as 50 and not 5
// Actual: 5
console.log(5 % 10);
//--------------------------------------------------
"Java" + "Script"
// Prediction: JavaScript because it' s a concatenate
// Actual:JavaScript
console.log("Java" + "Script");
//--------------------------------------------------

" " + " "
// Prediction: Empty because there is no value
// Actual: 
console.log(" " + " ");
//---------------------------------------------------
" " + 0
// Prediction:
// Actual:
console.log(" " + 0);
//--------------------------------------------------
true + true
// Prediction: 2 because true means 1
// Actual:2
console.log(true + true);
//---------------------------------------------------
true + false
// Prediction: It will ouput 1 because false means 0 and true means 1
// Actual: 1
console.log(true + false);
//---------------------------------------------------
false + true
// Prediction:It will ouput 1 because false means 0 and true means 1
// Actual:1
console.log(true + false);
//---------------------------------------------------
false - true
// Prediction:It will ouput 1 because false means 0 and true means 1
// Actual: -1
console.log(false - true);
//---------------------------------------------------
!true
// Prediction: false because it's boolean value
// Actual: false
console.log(!true);
//---------------------------------------------------
3 - 4
// Prediction: -1 because 3 and 4 are the numbers and 3<4
// Actual: -1
console.log(3-4);
//----------------------------------------------------
"Bob" - "bill"
// Prediction: It's not a number so we can't not calculate
// Actual: NaN
console.log("Bob" - "bill");
