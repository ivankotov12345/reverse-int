module.exports = function reverse (n) {
    if (n < 0) {
        n = -n
    }
    let number = n.toString();
  let arrayNumber = number.split('');
  let reversedArr = arrayNumber.reverse();
  let numberReversed = reversedArr.join('');
  return +numberReversed
}
