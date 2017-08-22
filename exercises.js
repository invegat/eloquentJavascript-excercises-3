function min(x,y) {
  return x<y ? x : y;
}
function isEven(x) {
  if (x >= 0) {
    if (x == 0)
      return true;
    if (x === 1)
      return false;
    return isEven(x - 2);
  }
  else {
    return isEven(x + 2);
  }
}
function countBs(s) {
  var count = 0;
  for (var i = 0;i<s.length;i++)
    if (s[i] === 'B')
      count++;
  return count;
} 
function countChar(s,c) {
  var count = 0;
  for (var i = 0;i<s.length;i++)
    if (s[i] === c)
      count++;
  return count;
} 
module.exports = {
min:min,
isEven:isEven,
countBs:countBs,
countChar:countChar
};
