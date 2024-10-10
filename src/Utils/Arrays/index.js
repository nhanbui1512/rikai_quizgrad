/**
 *
 * @param {[]} array
 * @param {number} value
 * @returns {number}
 */

function binarySearch(array, value) {
  const n = array.length;
  if (n === 0) return -1;

  let left = 0;
  let right = n - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] === value) return middle;
    if (array[middle] > value) right = middle - 1;
    else {
      left = middle + 1;
    }
  }
  return -1;
}

// const result = binarySearch([1, 2, 3, 4, 5, 6, 7], 3);
// console.log(result); // -> 2

export default { binarySearch };
