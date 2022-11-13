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
