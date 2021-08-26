// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected outcome: "85 is below boiling point" "350 is above boiling point" "212 is at boiling point"

// my pseudocode: we want to create a function which will take in a temperature and create a decision that our temperature is one of three possibilities

var temp1 = 85
var temp2 = 350
var temp3 = 212

var randomTemp = Math.floor(Math.random()* 350)

const decideTemperature = (tempStatus) => {
    if (tempStatus <= 211){
        return `${tempStatus} is below boiling point.`
    } else if (tempStatus === 212){
        return `${tempStatus} is at boiling point.`
    } else if (tempStatus > 212){
        return `${tempStatus} is above boiling point.`
    }
}

// var temp1
console.log(decideTemperature(temp1))

// var temp2 
console.log(decideTemperature(temp2))

// var temp3
console.log(decideTemperature(temp3))

// random temperature just for kicks
console.log(decideTemperature(randomTemp))

// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45] [10, 25, -40, 100, 160]

//my pseudocode: we want a function that will take each value of an array, determine each value within the array meets our conditions, and outputs those values multiplied by 5 in an array

var myForNumbers1 = [3, 7, 0, 6, -9]
var myForNumbers2 = [2, 5, -8, 20, 32]

const multipliesByFive = (anArray) => {
    let storageForNewArray = []
    for (let i=0 ; i < anArray.length ; i++){
        storageForNewArray.push(anArray[i]*5)
    }
    return storageForNewArray 
}

// expected outcome1 [15, 35, 0, 30, -45]
console.log(multipliesByFive(myForNumbers1))

// expected outcome2 [10, 25, -40, 100, 160]
console.log(multipliesByFive(myForNumbers2))


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [435, 30, 140, 80, 10] [40, -35, 0, 30, 60]

// my pseudocode: we want a function that will take each value of an array and use the built in .map to multiply each value of the array by 5

var myMapNumbers1 = [87, 6, 28, 16, 2]
var myMapNumbers2 = [8, -7, 0, 6, 12]

const multipliesArrayValuesByFive = (theArrayValue) => {
   return theArrayValue.map( value =>{
       return value * 5
   })
}

console.log(multipliesArrayValuesByFive(myMapNumbers1))
console.log(multipliesArrayValuesByFive(myMapNumbers2))


// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

// we want a function that will determine if each letter in the string is a vowel
// the function will then remove all the vowels from the string

// learned from google: .replace() -> regular expression that acts on strings to perform text search and text replace.

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

const determines = (string) => {
    var newString = string.replace(/[aeiou]/ig, "") // i makes the matching case insensitive, g finds all matches, and " " is the container for what .replace will replace the character match with, in this case nothing
    return newString
}

// answer 1
console.log(determines(stringWithVowels1))
// answer 2
console.log(determines(stringWithVowels2))



// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"

// we want to pass a value into our vowel remover and determine the type a value is
// output if the typeOf the value is not a string if false
// typeOf ---- return (variable) is not a string

var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"

const filteredDetermines = (value) => {
    if (typeof(value) === "boolean") {
        return `${value} is not a string`
    } else if (typeof(value) === "number") {
        return `${value} is not a string`
    } else if (typeof(value) === "string"){
        return value.replace(/[aeiou]/ig, "")
    }
}

//boolean
console.log(filteredDetermines(refactorTester1))
//number
console.log(filteredDetermines(refactorTester2))
//string
console.log(filteredDetermines(refactorTester3))


// --------------------6) Create a function that takes in an array of strings and returns the string with the most characters.
// Expected output: "chopsticks" "stemware"

// we want a function that takes the value of an array which contains strings and will decide on each string the character length by checking if string 'a' is bigger than string 'b' and then replacing string 'a' if string 'b' is longer

var utensils = ["fork", "knife", "tongs", "chopsticks", "skewer"]
var vessels = ["cup", "mug", "stemware", "glass", "tumbler", "tea cup"]

const mostCharacters = (theArray) => {
    let  result = " "; // take placeholder for new string (b)
    for (let i=0; i < theArray.length; i++){ // iterate over length of array
        let currentItem = theArray[i]; // current item = the values of the array with conditions i approved
        if (currentItem.length > result.length){ // so if theArray[i] (a) is greater than the length of the result (b) then array[i] (a) replaces the the value result.lenght (b)
            result = theArray[i]; // now result = a
        }
    }
    return result;
}

// utensils
console.log(mostCharacters(utensils))
// vessels
console.log(mostCharacters(vessels))

// --------------------7) Create a function that takes in an array of strings and returns an array with the last letter removed from each string.
// Expected output: ["Luig", "Peac", "Toa", "Yosh"] ["Ink", "Blink", "Pink", "Clyd"]

// we want a function that takes a value of an array
// the function will decide on each string --- .map()?
// and then replace the last charachter of the string with an empty character --- substring?

var mario = ["Luigi", "Peach", "Toad", "Yoshi"]
var pacman = ["Inky", "Blinky", "Pinky", "Clyde"]

const removeLast = (array2) => {
  let array3 = array2.map( char => {
    return char.substring(0,char.length -1)
  })
  return array3
}

//mario
console.log(removeLast(mario))
// pacman
console.log(removeLast(pacman))
