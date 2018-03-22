const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    
    it('should return "fizz-buzz" if divisible by 15', function() {
        const normalCases = [15,30,45];
        normalCases.forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
    });

    it('should return "buzz" if divisible by 5', function() {
        const normalCases = [5,10,20];
        normalCases.forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('buzz');
        });
    });

    it('should return "fizz" if divisible by 3', function() {
        const normalCases = [3,6,9];
        normalCases.forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('fizz');
        });
    });

    it('should return the same arg if not divisible by 15, 5, or 3', function() {
        const normalCases = [1,2,4];
        normalCases.forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal(input)
        });
    });

    it('should give an error if the arg is not a number', function() {
        const badInputs = ['2', 'two', null, false];
        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(num);
            }).to.throw(Error);
        });
    });
})