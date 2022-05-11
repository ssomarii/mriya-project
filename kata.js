// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
//
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
function lovefunc(flower1, flower2){
    if (flower1 % 2 == 0 & flower2 % 2 !== 0) {
        return(true);
    } else if (flower1 % 2 !== 0 & flower2 % 2 == 0) {
        return(true);
    } else return(false);
}

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
//
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
//
// Create a function which translates a given DNA string into RNA.
//
// For example:
//
// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
function DNAtoRNA(dna, rna) {
    rna = dna.replace(/t/ig, 'U');
    return(dna, rna);
}

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x){
    let result = x.reduce(function(a, b){
        return a*b;
    });
    return result;
}

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
function squareSum(numbers){
    let result = numbers.reduce(function(a, b) {
        return a + b**2;
    }, 0);
    return result;
}

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//
// For example,
//
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
//
// Hint: Don't forget to check for bad values like null/undefined
function countSheeps(arrayOfSheep) {
    function trueSheeps(value) {
        return value === true;
    }
    let result = arrayOfSheep.filter(trueSheeps);
    return result.length;
}

// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
    function positiveArr(value) {
        return value > 0;
    }
    let newArray = arr.filter(positiveArr);
    let result = newArray.reduce(function(a, b) {
        return a+b;
    }, 0);
    return result;
}
