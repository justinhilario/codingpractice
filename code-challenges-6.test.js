// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]

describe ("when function is called", () => {
  let output = ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]
  it ("capitalizes the name key", () => {
      expect (douglasAdams(people)).toEqual(output)
  })
})


// b) Create the function that makes the test pass.

// first we need to access the individual objects in the array - for loop, map
//people.map then people.name = ['ford prefect', 'zaphod beeblebrox', 'arthur dent']
// then we have to access the individual name name of the array as strings and capitalize the first letter of each word in the string

  const douglasAdams = (array) => {
    //map over the array to iterate over objects
    let novel = array.map(person => {
      //declare variable for the value at each name key in the object and split it into an array
      let personArray = person.name.split(" ")
      //declare variable to map over array of person name
      let bookChar = personArray.map(name => {
        //returning return first letter capitalized then add the remaining word
        return name.charAt(0).toUpperCase() + name.substring(1)
      //join the name array together into a string  
      }).join(" ")
      // return with string interpolation capitalized names
      return `${bookChar} is a ${person.occupation}.`
    })
    //final return of the array of sentences
    return novel
  }



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe ("when function is called", () => {
  let output1 = [ 2, 0, -1, 0 ]
  let output2 = [ 2, 1, -1 ]
  it ("capitalizes the name key", () => {
      expect (modulo3Array(hodgepodge1)).toEqual(output1)
  })
  it ("capitalizes the name key", () => {
    expect (modulo3Array(hodgepodge2)).toEqual(output2)
  })
})



// b) Create the function that makes the test pass.

  const modulo3Array = (arr) => {
    // Filter through array to only return numbers
    let numberArray = arr.filter(value => 
      typeof(value) === "number")
    // Map through number array and return the modulo of three
    return numberArray.map(num => {
      return num % 3
    })
  }

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

// a) Create a test with an expect statement using the variables provided.

var jumbleArray1 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var jumbleArray2 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

describe ("when function is called", () => {
    let testFinal = jumbleArray1 + jumbleArray2
    let expOutput = [ 3, 7, "hi", 10, "hello", 4, 1 ]
    it ("concats without repeats", () => {
        expect (dupliFinder(testFinal)).toEqual(expOutput)
  })
})


// b) Create the function that makes the test pass.

const dupliFinder = (array) => {
  // concat the two arrays into one
  let gluedArrays = jumbleArray1.concat(jumbleArray2)
  // filter new array to keep only unique values
  let removeDupes = gluedArrays.filter((item,index) => {
      return (gluedArrays.indexOf(item) == index)
  })
  return removeDupes
}