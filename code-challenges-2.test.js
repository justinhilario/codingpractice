// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe ( 'When "divisibleByThree" is called', () => {
    it ( "return '15' is divisible by three", () => {
        const numberOne = 15
        const thisWorked = divisibleByThree(numberOne);
        expect (thisWorked).toEqual(`${numberOne} is divisible by three`)
    })
    it ( "return '0' is divisible by three", () => {
        const numberTwo = 0
        const thisWorkedAgain = divisibleByThree(numberTwo);
        expect (thisWorkedAgain).toEqual(`${numberTwo} is divisible by three`)
    })
    it ( "return '-7' is not divisible by three", () => {
        const numberThree = -7
        const wowThirdTime = divisibleByThree(numberThree);
        expect (wowThirdTime).toEqual(`${numberThree} is not divisible by three`)
    })
})

// // b) Create the function that makes the test pass.

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
var num3 = -7
// Expected output: "-7 is not divisble by three"
const divisibleByThree = (testedValue) => {
    if (testedValue % 3 ===0){
        return `${testedValue} is divisible by three`
    } 
    else if (testedValue % 3 !==0){
        return `${testedValue} is not divisible by three`
    }
}


 
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe ( 'When "capitalizeFirstLetter" is called', () => {
    it ("return 'arrayCapitalized'", () => {
        const argumentOne = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        const capitalizedOne = arrayCapitalized(argumentOne)
        expect(capitalizedOne).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    })
    it ("return 'arrayCapitalized'", () => {
        const argumentTwo = ["temperature", "database", "chopsticks", "mango", "deduction"]
        const capitalizedTwo = arrayCapitalized(argumentTwo)
        expect(capitalizedTwo).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
  })

// b) Create the function that makes the test pass.

//   // we want a function that take the argument of an array to capitalize the first letter to each of the values in the array

//   // we want to iterate over each string in the array - use .map - since we want an array of the same length in return. 
//   //then use built in function .charAt to isolate the first index and.tuUppercase to capitalize the letter at index 0
//   //use built in function slice to return the rest off the array at index 1.

  const arrayCapitalized = (capitalizedArray) => {
      let iteratedArray = capitalizedArray.map( upper => {
        return upper.charAt(0).toUpperCase() + upper.slice(1)
      })
      return iteratedArray
    }


// --------------------3) Create a function that takes in an array of mixed data types and returns an array with ONLY NUMBERS sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var mixedDataArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 107]

var mixedDataArray = [3, "yo!", 94, -9, false, 0, 18, "hola!"]
// Expected output: [-9, 0, 3, 18, 94]

describe ("when 'numbersLeastToGreat' is called", () => {
  it ("when 'mixedDataArray1' iterared return", () => {
    const preSortedOne = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"]
    const sortedOne = numbersLeastToGreat(preSortedOne)
    expect (sortedOne).toEqual([-8, 0, 8, 46, 59, 107])
  });
  it ("when 'mixedDataArray2' iterared return", () => {
    const preSortedTwo = [3, "yo!", 94, -9, false, 0, 18, "hola!"]
    const sortedTwo = numbersLeastToGreat(preSortedTwo)
    expect (sortedTwo).toEqual([-9, 0, 3, 18, 94])
  });
    
})

// // // b) Create the function that makes the test pass.

// // we want a function that will that will decide on each valur in our array for the type of being a number; therefore, ...
// // we will use .filter and select for "number"
// tried to use .map and .push after to rearrange the array but couldn't get the logic correct... therefore, learned of .sort() which can be used with function expressions to re-arrange the array. However, our array stores the numbers as strings so we have to implement a compare function. Without the compare function the numbers would be sorted as if 18 is smaller than 3 as 1 is smaller than 3. Therefore, the compare function allows us to define an alternate sort order than what is built in. It works by comparing two values at a time (a and b). The method calls the compare function to compare A and B. The function calculates A minus B and if A is less than B the result will be negative indicating A being a smaller value than B and it will be sorted in that method.

const numbersLeastToGreat = (containsFiltered) => {
    let filteredArray = containsFiltered.filter( numbers => {
        return (typeof numbers === "number")
    });
    return filteredArray.sort(function(a,b){
        return a-b;
    })
}
//.sort( is )
//.map only iterates in order?
//.push

// // --------------------4) Create a function that takes in a string and logs the index of the first vowel.

// // a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// // // Expected output: 1
var vowelTester2 = "academy"
// // // Expected output: 0
var vowelTester3 = "challenge"
// // // Expected output: 2

describe ("When 'vowelIndexer' is called", () => {
  it ("When 'learn' is tested return '1'", () => {
    const word1 = "learn"
    const foundVowel1 = vowelIndexer (word1)
    expect (foundVowel1).toEqual(1)
  })
  it ("When 'academy' is tested return '0'", () => {
    const word2 = "academy"
    const foundVowel2 = vowelIndexer (word2)
    expect (foundVowel2).toEqual(0)
  })
  it ("When 'learn' is tested return '2'", () => {
    const word3 = "challenge"
    const foundVowel3 = vowelIndexer (word3)
    expect (foundVowel3).toEqual(2)
  }) 
})



// b) Create the function that makes the test pass.

// we want a function that will index our string and indicate the index of the first occurance of a vowel
// we could use regular expression (way easier) or convert our string (way harder) into an indexable array and iterate over each value to return the first instance of a vowel.

const vowelIndexer = (str) => {
    return str.search(/[a,e,i,o,u]/i)
}

// .search() is a regular expression in which it searches a string for a specified value and returns the position of the match. In this case we searched for vowels there was no need for the "g" modifier as we want the first instance of a vowel and for the search pattern to terminate after. "i" will make the code case-insensitive and more adaptable for matching different inputs