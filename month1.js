// var maxOperations = function (nums, k) {
//       let result = 0;
//       traverseThroughNums(nums)

//       function traverseThroughNums(nums){
//           if(nums.length === 0) return;
//           const firstNum = nums[0];
//           let foundNum = false;
//           for(let i = 1; i < nums.length; i++){
//               if(firstNum + nums[i] === k){
//                   result++;
//                   foundNum = true;
//                   nums.shift();
//                   nums.splice(i - 1, 1)
//                   break;
//              }
//           }
//           if(!foundNum) {
//               nums.shift()
//           }
//           return traverseThroughNums(nums)
//       }
  
//       return result;

//   nums.sort();
//   let result = 0;
//   let start = 0,
//     end = nums.length - 1;

//   while (start < end) {
//     if (nums[start] + nums[end] > k) {
//       end--;
//     } else if (nums[start] + nums[end] < k) {
//       start++;
//     } else {
//       start++;
//       end--;
//       result++;
//     }
//   }
//   return result;
// };

// var targetIndices = function (nums, target) {
//   const targetIndicesArray = [];
//   nums = nums.sort((a, b) => a - b).map((el, i)=> {
//     if(el === target){
//       targetIndicesArray.push(i)
//     }
//   });

//   return targetIndicesArray

// };

// function binarySearch(lists, sorted, low, high, target) {
//   if (low > high) return;

//   const mid = low + Math.floor((high - low) / 2);

//   if (sorted[mid] === target) {
//     lists.push(mid);
//   }

//   binarySearch(lists, sorted, low, mid - 1, target);
//   binarySearch(lists, sorted, mid + 1, high, target);
// }

// var targetIndices = function (nums, target) {
//   let result = [];
//   nums.sort((a, b) => a - b);
//   if (!nums.includes(target)) return [];

//   binarySearch(result, nums, 0, nums.length - 1, target);
//   return result.sort((a, b) => a - b);
// };

// console.log(targetIndices([1, 2, 5, 2, 3], 3));

// var sortSentence = function (s) {
//   s = s.split(' ').reduce((prev, next) => {
//     return {
//       ...prev,
//       [next[next.length - 1]]: next.slice(0, -1)
//     };
//   }, {});

//   console.log(s);

//   return Object.values(s).map((value) => {
//     return value
//   }).join(' ');

//   // return s.split(' ').reduce((prev, curr, i) => {
//   //   if(curr[curr.length - 1] > 0)
//   // }, [])
//   // .map(word => word[word.length - 1])
// };

// console.log(sortSentence('is2 sentence4 This1 a3'));

// var isPrefixOfWord = function (sentence, searchWord) {
//   sentence = sentence.split(' ').findIndex((word) => word.slice(0, searchWord.length - 1).includes(searchWord));
//   if (sentence > 0) {
//     return sentence + 1;
//   } else {
//     return sentence;
//   }
// };

// console.log(isPrefixOfWord('i am tired', 'you'));

// var nextGreaterElement = function(nums1, nums2) {
//   const result = [];
//   for(let i = 0; i < nums1.length; i++){
//     const nums2Index = nums2.indexOf(nums1[i]);
//     let foundGreaterNumber = true;
//     for(let j = nums2Index; j < nums2.length; j++){
//       if(nums2[j + 1] > nums2[nums2Index]) {
//         result.push(nums2[j + 1])
//         foundGreaterNumber = false;
//         break;
//       }
//     }
//     if(foundGreaterNumber) result.push(-1)
//   }
//   return result
// };

// console.log(nextGreaterElement([1,3,5,2,4], [6,5,4,3,2,1,7]));

// Sliding window. JavaScript:

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var findMaxAverage = function(nums, k) {
//     let currSum = 0;
//     let maxSum = Number.MIN_SAFE_INTEGER;

//     for (let i = 0; i < nums.length; i++) {
//         currSum += nums[i];

//         if (i >= k - 1) {
//             maxSum = Math.max(currSum, maxSum);
//             currSum -= nums[i - (k - 1)];
//         }
//     }

//     return maxSum / k;
// };
// or with split loops:

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var findMaxAverage = function(nums, k) {
//     let currSum = 0;

//     for (let i = 0; i < k; i++) {
//         currSum += nums[i];
//     }

//     let maxSum = currSum;

//     for (let i = k; i < nums.length; i++) {
//         currSum += nums[i] - nums[i - k];
//         maxSum = Math.max(currSum, maxSum);
//     }

//     return maxSum / k;
// };

// var findMaxAverage = function (nums, k) {
// MY VERSION -------------- SLOW
// let sum = -Infinity;
// for (let i = 0; i < k; i++) {
//   if(i > k) break;
//   let substringArr = nums.slice(i, i + k);
//   let currSubArrSum = substringArr.reduce((prev, next) => prev + next);
//   if (currSubArrSum > sum) sum = currSubArrSum;
// }
// return (sum / k).toFixed(5);

// OTHER    -------------- FAST
// let currSum = 0;
// let maxSum = Number.MIN_SAFE_INTEGER;
// for (let i = 0; i < nums.length; i++) {
//   currSum += nums[i];
//   if (i >= k - 1) {
//     maxSum = Math.max(currSum, maxSum);
//     currSum -= nums[i - (k - 1)];
//   }
// }
// return (maxSum / k).toFixed(5);

//   let currSum = 0;

//   for (let i = 0; i < k; i++) {
//     currSum += nums[i];
//   }

//   let maxSum = currSum;

//   for (let i = k; i < nums.length; i++) {
//     currSum += nums[i] - nums[i - k];
//     maxSum = Math.max(currSum, maxSum);
//   }

//   return (maxSum / k).toFixed(5);
// };

// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

// var countGoodTriplets = function (arr, a, b, c) {
//   let goodTriplets = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         if (
//           Math.abs(arr[i] - arr[j]) <= a &&
//           Math.abs(arr[j] - arr[k]) <= b &&
//           Math.abs(arr[i] - arr[k]) <= c
//         ) {
//             goodTriplets++;
//         }
//       }
//     }
//   }
//   return goodTriplets;
// };

// console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));

// var stringMatching = function (words) {
//   let substringOfAnotherWord = [];
//   for(let wordToCheck of words){
//     for(let word of words){
//       if(word.includes(wordToCheck) && word.length != wordToCheck.length && 
//       !substringOfAnotherWord.includes(wordToCheck)){
//         substringOfAnotherWord.push(wordToCheck);
//       }
//     }
//   }
//   return substringOfAnotherWord;
// };
// console.log(stringMatching(["leetcoder","leetcode","od","hamlet","am"]));

// var sumOfThree = function(num) {
//   // const third = num  / 3;
//   // const remainder = num % 10;
//   // console.log(remainder)

//   const third = Math.floor(num / 3);

//   if(third-1 + third + third +1 === num) return [third-1,third, third +1]
//   else return []
// };

// console.log(sumOfThree(36));
 
// function senate(senate){
//   senate = senate.split("");
//   console.log(senate.indexOf("D"))
//     while(senate.includes("R")&&senate.includes("D")){
//         if(senate[0]==="R") senate.splice(senate.indexOf("D"), 1);
//         else senate.splice(senate.indexOf("R"), 1);
//         senate.push(senate.shift());
//     }
//     return senate[0]==="R" ?  "Radiant" : "Dire";
// }

// https://leetcode.com/problem-list/top-interview-questions/

// const nextGreatestLetter = function(letters, target) {
//   const indexOfFristLargest = letters.findIndex((letter) => letter > target)

//   return letters[indexOfFristLargest === -1 ? 0 : indexOfFristLargest];
// }

// console.log(nextGreatestLetter(["c","f","j"], "a"))

// var checkString = function (string) {
//   let i = 0;
//   let foundFirstB = false;
//   while(i < string.length){
//     if(string[i] === "b"){
//       foundFirstB = true;
//     }
//     if(foundFirstB && string[i] === 'a'){
//       return false;
//     }
//     i++;
//   }

//   return true;
// };

// SOLUTION 2
// var checkString = function (string) {
// return (
//   s.indexOf("b") === -1 ||                          // is b is not there ?
//   s.lastIndexOf("a") < s.indexOf("b")               // is  last a  before  1st b ?
// );
//}
// const maxProduct = (nums) => {
//   const maxNum1 = Math.max(...nums);
//   nums.splice(nums.indexOf(maxNum1), 1);
//   const maxNum2 = Math.max(...nums)
//   return (maxNum1-1)*(maxNum2-1);

// };

// const maxProduct = nums => {
//   let m1 = 0, m2 = 0;
//   for (const val of nums) {
//     m2 = Math.max(m2, Math.min(m1, val));
//     m1 = Math.max(m1, val);
//   }
//   return (m1 - 1) * (m2 - 1);
// };

// const maxProduct = nums => {
//   let max = 0;
//   for (let i = 0, j = nums.length - 1; i < j;) {
//     max = Math.max(max, (nums[i] - 1) * (nums[j] - 1));
//     nums[i] < nums[j] ? ++i : --j;
//   }
//   return max;
// };

// const maxProduct = (
//   nums,
//   max = nums.reduce(
//     (prev, val) => [
//       Math.max(prev[1], Math.min(prev[0], val)),
//       Math.max(prev[0], val),
//     ],
//     [0, 0]
//   )
// ) => (max[0] - 1) * (max[1] - 1);

// const numOfBurgers = (tomatoSlices, cheeseSlices) => {
//  if(tomatoSlices === 0 && cheeseSlices === 0) return [0,0]
//  let [totalNumSmall, restOfSmallTomatoes, restOfSmallCheese] =  calculateMaxSlices(tomatoSlices, cheeseSlices, 2)

//  while(totalNumSmall > 0 && (restOfSmallTomatoes > 0 || restOfSmallCheese > 0)){
//    totalNumSmall--;
//    restOfSmallTomatoes = restOfSmallTomatoes + 2;
//    restOfSmallCheese++;
//    let [totalNumJumbo, restOfJumboTomatoes, restOfJumboCheese] =  calculateMaxSlices(restOfSmallTomatoes, restOfSmallCheese, 4)

//    if(restOfJumboTomatoes === 0 && restOfJumboCheese === 0) {
//     return [totalNumJumbo , totalNumSmall]
//    }
//  }
//  if(totalNumSmall === 0) return []
//  return [0, totalNumSmall]
// };

// const calculateMaxSlices = (tomatoSlices, cheeseSlices, divisionNumTomatoes) => {
//   let total = 0;
//   while(tomatoSlices > 0 && cheeseSlices > 0){
//     tomatoSlices = tomatoSlices - divisionNumTomatoes;
//     cheeseSlices = cheeseSlices -1;
//     total++;
//   }
//   return [total, tomatoSlices, cheeseSlices];
// }

// var numOfBurgers = function(tomatoSlices, cheeseSlices) {
//   let jumbo = (tomatoSlices - 2 * cheeseSlices) / 2;
//   let small = cheeseSlices - jumbo;
//   return jumbo >= 0 && small >= 0 && jumbo % 1 == 0 ? [jumbo, small] : [];
// };

// console.log(numOfBurgers(8,2))

// var maxOperations = function(nums, k) {
//   nums.sort((a,b) => a-b);
//   let count = 0;
//   let left = 0, right = nums.length - 1;

//   while(left < right){
//     const tempSum = nums[left] + nums[right];
//     if(tempSum == k){
//       count++;
//       left++;
//       right--;
//     } else if ( tempSum < k){
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return count;
// }

// var maxOperations = function (nums, k) {
//   const hashMap = new Map();
//   let operationsCount = 0;

//   for (let i = 0; i < nums.length; i++) {
//     const diff = k - nums[i];

//     // if the current difference is not found then set the value to map
//     if (!hashMap.has(diff)) {

//       hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1);
//       continue;
//     }
//     // In previous condition we checked that the hash presents
//     // reduce the occurrance by 1
//     hashMap.set(diff, hashMap.get(diff) - 1);
//     // if the value is 0 of hash then delete 

//     // 0 means the hash has no more occurrances
//     if (!hashMap.get(diff)) hashMap.delete(diff);
//     // increase the operation count
//     operationsCount++;
//   }
//   return operationsCount;
// };

// console.log(
//   maxOperations([1,2,4,5], 6)
// );


// var generateParenthesis = function(n){
//   const combos = [];

//   function helper(combo, lefts, total){
//     if(total === n * 2){
//       if(lefts === 0){
//         combos.push(combo)
//       }
//       return;
//     }
//     if(lefts < 0) return;
//     if(lefts > n) return;
//     helper(combo + "(", lefts + 1, total + 1)
//     helper(combo + ")", lefts - 1, total + 1)
//   }
      
//   helper("(", 1, 1)

//   return combos;
// }

// console.log(
//   generateParenthesis(3)
// );


// var rob = function(nums) {
//   return Math.max(helper(nums.slice(0, nums.length - 1)), helper(nums.slice(1, nums.length)), nums[0])
  
//   function helper(nums){
//       console.log(nums)
//       let rob1 = 0;
//       let rob2 = 0;
      
//       for (const n of nums){
//           let newRob = Math.max(rob1 + n, rob2);
//           rob1 = rob2;
//           rob2 = newRob; 
//       }
//       return rob2;
      
//   }
// };
// console.log(rob([200,3,140,20,10]))

// console.log(rob([1,7,1,1,1,7]))

// https://leetcode.com/problems/find-median-from-data-stream/

// var minimizeResult = function (expression) {
//   "(999+999)"
//   "9(99+999)"
//   "99(9+999)"
//   "(999+99)9"
//   "(999+9)99"
//   "9(99+99)9"
//   "99(9+99)9"
//   "9(99+9)99"
//   "99(9+9)99"

// };

// console.log(minimizeResult('247+38'));
