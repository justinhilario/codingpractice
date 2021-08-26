// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// first off: what is a Fibonacci? Fibonacci sequence is found by adding up the two nunbers before it.
// ex. 1,1,2,3,4,5
// 2 is (1+1), 3 is (1+2), 5 is (2+3)

//so with that information: we want a function that will autopopulate a fibonacci sequence as an array when a value is input. The input is the given length, so if 6 is inupt we want until index 5  of the fibonacci.

// maybe math could go a = a; a + a = b; a + b = c; c + b = d

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// describe ("when 'fibonacciGenerator' is called with 6, we want it to return a fibonacci array the length of that number", () => {
//     it("when 'fibonacciGenerator' is called with 6, we want it to return a fibonacci array the length of that number", () => {
//         const userInput = 6
//         const retrievedArray = fibonacciGenerator(userInput)
//         expect (retrievedArray).toEqual([1, 1, 2, 3, 5, 8]) 
//     })
//     it("when 'fibonacciGenerator' is called with 10, we want it to return a fibonacci array the length of that number", () => {
//         const userInput = 10
//         const retrievedArray = fibonacciGenerator(userInput)
//         expect (retrievedArray).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]) 
//     })
// })
   
// // as expected our test fails(fibonacciGenerator is not a function)


// // b) Create the function that makes the test pass.

// // first off: what is a Fibonacci? Fibonacci sequence is found by adding up the two nunbers before it.
// // ex. 1,1,2,3,4,5
// // 2 is (1+1), 3 is (1+2), 5 is (2+3)

// //so with that information: we want a function that will autopopulate a fibonacci sequence as an array when a value is input. The input is the given length, so if 6 is input we want until index 5 of the fibonacci.

// // maybe math could go a = a; a + a = b; a + b = c; c + b = d
// // fibonacci always begins with [0,1]
// // iterate over the array and .push() values into the end of the array up to the index
// //(x)n = x(n-1) + x(n-2))

// // when a number is input we want it to export that length of an array

var randomFib = Math.floor(Math.random ()* 100)

const fibonacciGenerator = (n) => {
    if (n===0) { // 0 as there is no prevous numbers to add
        return [0]
    } else if (n===1){ // 1 + 0 would return 1
        return [1]
    } else {
    let fib = [1,1];  //store the array to first two number of desired sequence.
    //Running loop n-2 times
    for (var i = 0; i < n-2; i++) {
        //Adding the sum of last two elements of the array to end of array. 
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);            
    }
    return fib;
  }
}
    

console.log(fibonacciGenerator(6))
console.log(fibonacciGenerator(10))

console.log(fibonacciGenerator(randomFib))

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe (" when 'sortedOdd' is called", () => {
    it ( "when 'fullArr1' input", () => {
        let values = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        let filtered = sortedOdd(values)
        expect (filtered).toEqual([-9, 7, 9, 199])
    })
    it ( "when 'fullArr2' input", () => {
        let values = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        let filtered = sortedOdd(values)
        expect (filtered).toEqual([-823, 7, 23])
    })
})


// // // b) Create the function that makes the test pass.

// // // we want a function that will decide on each value if it is a number and then make a decision on the on the output on that array if it is odd
const sortedOdd = (array) => {
    let filteredArray = array.filter( digits => {
        return (typeof digits === 'number' && digits % 2 !== 0 )
    })
    
    return filteredArray.sort(function(a,b) {
        return a-b;
  })
}

console.log(sortedOdd(fullArr1))
console.log(sortedOdd(fullArr2))

// didnt work using a for loop possibly too many returns? so pivoted to .filter
// const sortedOdd = (array) => {
//     for ( let i=0; i < array.length; i++ )
//         if (typeof array[i] === 'number' && array[i] % 2 !== 0 ) {
//             return array[i]
//     }
//     let array[i] = sortFilter
//     return array.sort(function(a,b) {
//         return a-b
//   })
// }



// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

// a) Create a test with expect statements for each of the variables provided.

var middleLetters1 = "alpha"
// Expected output: “p”

var middleLetters2 = "rhinoceros"
// Expected output: “oc”

describe (" when 'middleParse' is called", () => {
    it ( "when 'alpha' input", () => {
        let word = "alpha"
        let parsed = middleParse(word)
        expect (parsed).toEqual('p')
    })
    it ( "when 'rhinoceros' input", () => {
        let word = "rhinoceros"
        let parsed = middleParse(word)
        expect (parsed).toEqual('oc')
    })
})


// // b) Create the function that makes the test pass.
// // we want a function that when it takes in a string it will return the middle letter of the word. 
// // else if the array is even do this function
// // else typeOf not a string return not a word

// //divide by two subtract half of that from each side?

const middleParse = (word) => {
    let length = word.length
    let middle = Math.floor(length/2)
    if (length % 2 === 0) {
        return word[middle-1] + word[middle]
    } else {
        return word[middle]
    }
}

console.log(middleParse(middleLetters1))
console.log(middleParse(middleLetters2))


// --------------------4) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []


describe (" when 'washingMachine' is called", () => {
    it ( "when 'numbersToAdd2' input", () => {
        let arrayPods = "[0, 7, -8, 12]"
        let cleanValues = washingMachine(arrayPods)
        expect (cleanValues).toEqual([0, 7, -1, 11])
    })
    it ( "when 'numbersToAdd1' input", () => {
        let arrayPods= [2, 4, 45, 9]
        let cleanValues = washingMachine(arrayPods)
        expect (cleanValues).toEqual([2, 6, 51, 60])
    })
    it ( "when '[]' input", () => {
        let arrayPods= []
        let cleanValues = washingMachine(arrayPods)
        expect (cleanValues).toEqual([])
    })
})

// b) Create the function that makes the test pass.

// we want a function that will make add the integers in the fashion of a continous sum
// we want a variable to store the output array
// we want a default sum, 0
// and we want a function the will make a decision on each value of the array (for loop or for each)
//we want to increment on the current sum and add on to the end of the current index
const washingMachine = (value) => {
    let result = []
    let currentSum = 0
    value.forEach((currentValue) => {
        currentSum += currentValue // addition assignment operator (x += y )essentially equals [x = x+y] or [currentSum = currentSum + currentValue] 
        result.push(currentSum)
    })
    return result
    }
   
console.log(washingMachine(numbersToAdd1))
console.log(washingMachine(numbersToAdd2))
console.log(washingMachine(numbersToAdd3))