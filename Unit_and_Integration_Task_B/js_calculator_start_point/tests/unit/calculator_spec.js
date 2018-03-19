var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add a number to the previous total', function(){
    const expected = 11
    calculator.previousTotal = 6
    calculator.add(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, expected);
  })

  it('should be able to subtract a number from the previous total', function(){
    const expected = 4
    calculator.previousTotal = 6
    calculator.subtract(2);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, expected);
  })

  it('should be able to multiply the previous total number by a number', function(){
    const expected = 12
    calculator.previousTotal = 6
    calculator.multiply(2);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, expected);
  })

  it('should be able to divide the previous total number by a number', function(){
    const expected = 3
    calculator.previousTotal = 6
    calculator.divide(2);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, expected);
  })

  it('should set the runningTotal when a single number button is clicked', function(){
    const expected = 6
    calculator.numberClick(6);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, expected);
  })

  it('should concatonate a number to the runningTotal when multiple number buttons are clicked', function(){
    const expected = 63
    calculator.numberClick(6);
    calculator.numberClick(3);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, expected);
  })

  it('should set newTotal to false when a number button is clicked if runningTotal is 0', function(){
    const expected = false;
    calculator.numberClick(6);
    const actual = calculator.newTotal;
    assert.strictEqual(actual, expected);
  })


});
