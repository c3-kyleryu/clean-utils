'use strict';

/**
 * Clamp a number between a minimum and maximum.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function clamp(value, min, max) {
  if (min > max) throw new RangeError('min must be <= max');
  return Math.min(Math.max(value, min), max);
}

/**
 * Return a new array with duplicate values removed, preserving order.
 * @param {Array} arr
 * @returns {Array}
 */
function unique(arr) {
  return Array.from(new Set(arr));
}

/**
 * Split an array into chunks of the given size.
 * @param {Array} arr
 * @param {number} size
 * @returns {Array<Array>}
 */
function chunk(arr, size) {
  if (size <= 0) throw new RangeError('size must be > 0');
  const out = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

/**
 * Deep-freeze an object recursively.
 * @param {Object} obj
 * @returns {Object}
 */
function deepFreeze(obj) {
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (val && typeof val === 'object' && !Object.isFrozen(val)) {
      deepFreeze(val);
    }
  });
  return Object.freeze(obj);
}

/**
 * Capitalize the first letter of a string.
 * @param {string} str
 * @returns {string}
 */
function capitalize(str) {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
}

/**
 * Sum an array of numbers.
 * @param {number[]} nums
 * @returns {number}
 */
function sum(nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

/**
 * Compute the arithmetic mean of an array of numbers.
 * @param {number[]} nums
 * @returns {number}
 */
function mean(nums) {
  if (nums.length === 0) throw new RangeError('cannot average empty array');
  return sum(nums) / nums.length;
}

/**
 * Group array items by the result of a key function.
 * @param {Array} arr
 * @param {(item:any)=>string} keyFn
 * @returns {Object<string, Array>}
 */
function groupBy(arr, keyFn) {
  return arr.reduce((acc, item) => {
    const key = keyFn(item);
    (acc[key] = acc[key] || []).push(item);
    return acc;
  }, {});
}

module.exports = {
  clamp,
  unique,
  chunk,
  deepFreeze,
  capitalize,
  sum,
  mean,
  groupBy,
};
