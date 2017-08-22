var exercises = require('../exercises');

describe('min(x,y)', function() {
  it('should return the minimum of x and y', function() {
    expect(exercises.min(3,4)).toEqual(3);
  });
});
describe('isEven(x)', function() {
  it('should return true of even numbers, false for odd numbers', function() {
    expect(exercises.isEven(50)).toEqual(true);
    expect(exercises.isEven(75)).toEqual(false);
    expect(exercises.isEven(-1)).toEqual(false);
  });
});
describe('countBs(s)', function() {
  it('should return a count of the \'B\' characters in s' , function() {
    expect(exercises.countBs('xyB12Bab')).toEqual(2);
  });
});
describe('countChar(s,c)', function() {
  it('should return a count of the c characters in s' , function() {
    expect(exercises.countChar('xyB12BxabztxyXX','x')).toEqual(3);
  });
});