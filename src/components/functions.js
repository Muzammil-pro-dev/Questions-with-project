// 1 
export const removeDuplicates = (arr) => [...new Set(arr)];

// 2 
export const reverseString = (str) => str.split("").reverse().join("");

// 3 
export const evenOdd = (arr) => ({
  even: arr.filter(n => n % 2 === 0),
  odd: arr.filter(n => n % 2 !== 0)
});

// 4 
export const largest = (arr) => Math.max(...arr);

// 5 
export const countVowels = (str) =>
  (str.match(/[aeiou]/gi) || []).length;

// 6 
export const capitalize = (str) =>
  str.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");

// 7 
export const removeFalsy = (arr) => arr.filter(Boolean);

// 8 
export const sumArray = (arr) =>
  arr.reduce((a, b) => a + b, 0);

// 9 
export const missingNumbers = (arr) => {
  let max = Math.max(...arr);
  let result = [];
  for (let i = 1; i <= max; i++) {
    if (!arr.includes(i)) result.push(i);
  }
  return result;
};