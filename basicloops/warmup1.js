/*
    Approaching a problem

    --> Think about the solution
    --> think about the optimal soultion (considering the time and space complexity)
    --> Optimize the code
    --> Dry run

    things to consider

     --> edge cases 

*/

//reversing an array

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(i);
}

// reversing a string
let str = "MyGoal";

function reverseStr(str) {
    if (str.length == 0) return "String is empty";
    if (str.length == 1) return str;
    return str.split("").reverse().join("");
}

//find max and min element in an array 

/**
 * What are the constraints
 * 
 * 1st approach is sort the array and return first and last element 
 * 2nd approach looping through array
 *  -- consider first element as min and max element 
 *  -- compare the next element and change the min and max element accordingly
 */

function findMaxMin(arr) {  // 1,2,3,4,5,2,3
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++) { // 2 3 4 5 
        if (arr[i] < min) min = arr[i]; // 2 < 1 ; 3< 1; 4 < 1; 5<1
        else if (arr[i] > max) max = arr[i]; // 2 > 1 ; 3> 2 ; 4>3; 5>4
        // max = 2 ; 3; 4; 5
    }
    return [max, min];
}

console.log(findMaxMin([1, 2, 3, 4, 5, 2, 3]));

// Check if array is a Palindrome

// [1,2,3,4,3,2,1] -> join -> 1234321 == arr.reverse().join("") 
/**
 * pointer at first and last elements of array 
 * 
 */

/**
 * Edge case 
 *  -- array length == 0 return 
 *  -- array length == 1 return true
 */

function IsPalindrome(arr) {
    if (arr.length == 0) return " array is empty";
    else if (arr.length == 1) return true;

    let i = 0;
    let j = arr.length - 1;
    //when using 2 pointers try to use while loop. It will make the code look cleaner
    while (i < j) {
        if (arr[i] != arr[j]) return false;
        i++;
        j--;
    }
    return true;

    // else if (arr.join("") === arr.reverse().join("")) return true;
    // else return false;
}

console.log(IsPalindrome([1, 2, 3, 4, 5, 3, 2, 1]));

// frequency (occurance) 
/**
 * Approach 
 *  edge case 
 *      check if array has elements or not 
 *      Ask if array is sorted
 *  Loop through each and every element and increment the value if we want a match
 * 
 * 
 */

function frequency(arr, target) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) result++;
    }
    return result;
}

console.log(frequency([1, 2, 3, 2, 2, 4, 5, 2], 2));

/**
 * 0000 0
 * 0001 1
 * 0010 2
 * 0011
 * 0100
 * 0101
 * 0110
 * 0111
 * 1000
 * 1001
 * 1010
 * 1011
 * 1100
 * 1101
 * 1110
 * 1111 15
 */