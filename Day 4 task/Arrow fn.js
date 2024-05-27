// 1. Print odd numbers in an array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
         }
// 1
// 3
// 5
// 7
// 9

// 2. Convert all the strings to title caps in a string array

var str = "sophia";
titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }            
  // 'sophia'

  // 3. Sum of all numbers in an array

  var numbers = [1, 2, 3, 4, 5 ];
  sum = (array)=>{
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
          }
// 15

// 4. Return all the prime numbers in an array 

var numarry = [ 1, 2, 3, 4, 5];
primeNumber = (numArray) => {
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}
// (4) [1, 2, 3, 5]

// 5.  Return all the palindromes in an array

var palindrome = ([ 1, 2, 3 ], 4);

Palindrome = (arr, n) => {
    for (let i = 0; i < n; i++) {
      let ans = isPalindrome(arr[i]);
         if (ans == false)
           return false;
    }
    return true;
} 
// true