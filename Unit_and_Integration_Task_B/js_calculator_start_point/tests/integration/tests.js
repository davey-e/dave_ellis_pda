var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have a working number 1 button', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1');
  })

  it('should have a working number 2 button', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  })

  it('should have a working number 3 button', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3');
  })

  it('should have a working number 4 button', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  })

  it('should have a working number 5 button', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  })

  it('should have a working number 6 button', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6');
  })

  it('should have a working number 7 button', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7');
  })

  it('should have a working number 8 button', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number8')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8');
  })

  it('should have a working number 9 button', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9');
  })

  it('should have a working number 0 button', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10');
  })

  it('should concatonate multiple numbers into the running total when clicking on multiple number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('234');
  })



});