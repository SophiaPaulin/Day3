// 1.Print odd numbers in an array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(data = []){
    for(var i = 0 ; i< data.length ; i++){
          if(data[i]%2!==0){
             console.log(data[i])
          } 
     }
  })(numbers)
// 1
// 3
// 5
// 7
// 9

// 2. Convert all the strings to title caps in a string array
var str = "sophia";
(function (str) {
                    
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
 } 
   return str.join(' ');
 }) (str)

//'Sophia'

// 3.Sum of all numbers in an array

var nums = [ 1, 2, 3, 4, 5 ];

(function(array){
 var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
         sum = sum + array[i];
 }
    return sum;
})(nums) 
//15

// 4.Return all the prime numbers in an array

var numarry = [ 1, 2, 3, 4, 5];
( function(numArray){
      numArray = numArray.filter((number) => {
          for (var i = 2; i <= Math.sqrt(number); i++) {
             if (number % i === 0) return false;
 }
      return true;
 });
     console.log(numArray);
 })(numarry)
//(4) [1, 2, 3, 5]

// 5.Return all the palindromes in an array

var palindrome = ([ 1, 2, 3 ], 4);
(function (arr, n){
   for (let i = 0; i < n; i++){
     let ans = isPalindrome(arr[i]);
         if (ans == false)
          return false;
}
    return true;
}) (palindrome)
//true

// 6.Return median of two sorted arrays of same size

const median = (a1, a2) => {
   let x = a1.concat(a2);
   x.sort(function (a,b) {
     return a - b;
   });
   let len = x.length;
   
   return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];
 
 }
 
 let a = [0,2,3,5,9];
 let b = [1,4];
 console.log(median(a,b));
 // 3

 // 7.Rotate an array by K times

 var nums = [ 1, 2, 3, 4, 5 ];
  (function(array){
  let dup = [...new Set(array)];
     console.log(dup);
 })(nums)
//(5) [1, 2, 3, 4, 5]