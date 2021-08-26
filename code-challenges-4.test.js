// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe ("when 'removeShuffle' is called", () => {
    let colors1 = ["purple", "blue", "green", "yellow", "pink"]
    let expect1 = ["yellow", "blue", "pink", "green"]
    let colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    let expect2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    it ("removes first item and shuffles from 'colors1'", () => {
        expect (removeShuffle(colors1).sort()).toEqual(expect1.sort())
    })
    it ("removes first item and shuffles from 'colors2'", () => {
        expect (removeShuffle(colors2).sort()).toEqual(expect2.sort())
    })
})


// b) Create the function that makes the test pass.

const removeShuffle = (array) => {
    let firstGone = array.splice(1)
    return firstGone.sort( (a,b) => 0.5 - Math.random())
}



// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with expect statements for each of the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe ("when 'cubedSum' is called", () => {
    let cubeAndSum1 = [2, 3, 4]
    let cube1 = 99
    let cubeAndSum2 = [0, 5, 10]
    let cube2 = 1125
    it ("sums and cubes the numbers", () => {
        expect (cubedSum(cubeAndSum1)).toEqual(cube1)
    })
    it ("subs and cubes the numbers'", () => {
        expect (cubedSum(cubeAndSum2)).toEqual(cube2)
    })
})




// // b) Create the function that makes the test pass.

// we want to sum the numbers over the array and multiply those summed values by three

const cubedSum = (array) => {
    let currentSum = 0
    for (let i=0; i < array.length; i++) {
        currentSum = currentSum + (array[i]**3);
    }
    return currentSum
    }




// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]


describe ("when 'sortRemove' is called", () => {
    let nums1 = [3, 56, 90, -8, 0, 23, 6]
    let sorted1 = [-8, 90]
    let nums2 = [109, 5, 9, -59, 8, 24]
    let sorted2 = [-59, 109]
    it ("return minimum and maximum", () => {
        expect (sortRemove(nums1)).toEqual(sorted1)
    })
    it ("return minimum and maximum", () => {
        expect (sortRemove(nums2)).toEqual(sorted2)
    })
})

// we want to sort an array from least to greatest then return only the first and the last number

// b) Create the function that makes the test pass.

const sortRemove = (array) => {
    array.sort(function (a,b) {
        return (a-b)
    })
    return [array[0], array[array.length -1]]
}



// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

// a) Create a test with expect statements for each of the variables provided.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

// odd indexes .tocapitalize

describe ("when 'everyCapital' is called", () => {
    let testString1 = "albatross"
    let oddCapital1 = "aLbAtRoSs"
    let testString2 = "jabberwocky"
    let oddCapital2 = "jAbBeRwOcKy"
    it ("capitalize odd indexes", () => {
        expect (everyCapital(testString1)).toEqual(oddCapital1)
    })
    it ("capitalize odd indexes", () => {
        expect (everyCapital(testString2)).toEqual(oddCapital2)
    })
})


// b) Create the function that makes the test pass.

// we want a function that will iterate over a string and will add the odd letters to the array uppercased then add the even letters lowercased.

const everyCapital = (string) => {
    var output = ""
    for(var i = 0; i < string.length; i++){
        if (i % 2 !== 0) {
            output += string[i].toUpperCase();
        }
        else {
            output += string[i].toLowerCase();
         }   
    }
    return output
}


// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe ("when 'concatArrays' is called", () => {
    let testString1 = [3, 7, 10, 5, 4, 3, 3]
    let testString2 = [7, 8, 2, 3, 1, 5, 4]
    let testFinal = testString1 + testString2
    let expOutput = [3, 7, 10, 5, 4, 8, 2, 1]
    it ("concats without repeats", () => {
        expect (concatArrays(testFinal)).toEqual(expOutput)
    })
})



// b) Create the function that makes the test pass.

const concatArrays = (array) => {
    let arrayOne = testArray1
    let arrayTwo = testArray2
    let gluedArrays = arrayOne.concat(arrayTwo)
    let removeDupes = gluedArrays.filter((item,index) => {
        return (gluedArrays.indexOf(item) == index)
    })
    return removeDupes
}