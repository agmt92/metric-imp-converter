const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    // convertHandler should correctly read a whole number input.
    test('Whole number input', function() {
        assert.equal(convertHandler.getNum('32mi'), 32);
    });
    // convertHandler should correctly read a decimal number input.
    test('Decimal number input', function() {
        assert.equal(convertHandler.getNum('32.5mi'), 32.5);
    });
    // convertHandler should correctly read a fractional input.
    test('Fractional number input', function() {
        assert.equal(convertHandler.getNum('32/5mi'), 32/5);
    });
    // convertHandler should correctly read a fractional input with a decimal.
    test('Fractional number input with decimal', function() {
        assert.equal(convertHandler.getNum('32.5/5mi'), 32.5/5);
    });
    // convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
    test('Double fraction input', function() {
        assert.equal(convertHandler.getNum('3/2/3mi'), false);
    });
    // convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
    test('No numerical input', function() {
        assert.equal(convertHandler.getNum('mi'), 1);
    });
    // convertHandler should correctly read each valid input unit.
    test('Valid input unit', function() {
        assert.equal(convertHandler.getUnit('32mi'), 'mi');
    });
    // convertHandler should correctly return an error for an invalid input unit.
    test('Invalid input unit', function() {
        assert.equal(convertHandler.getUnit('32mii'), false);
    });
    // convertHandler should return the correct return unit for each valid input unit.
    test('Return unit', function() {
        assert.equal(convertHandler.getReturnUnit('mi'), 'km');
    });
    // convertHandler should correctly return the spelled-out string unit for each valid input unit.
    test('Return spelled-out unit', function() {
        assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
    });
    // convertHandler should correctly convert gal to L.
    test('Convert gal to L', function() {
        assert.equal(convertHandler.convert(1, 'gal'), 3.78541);
    });
    // convertHandler should correctly convert L to gal.
    test('Convert L to gal', function() {
        assert.equal(convertHandler.convert(3.78541, 'L'), 1);
    });
    // convertHandler should correctly convert mi to km.
    test('Convert mi to km', function() {
        assert.equal(convertHandler.convert(1, 'mi'), 1.60934);
    });
    // convertHandler should correctly convert km to mi.
    test('Convert km to mi', function() {
        assert.equal(convertHandler.convert(1.60934, 'km'), 1);
    });
    // convertHandler should correctly convert lbs to kg.
    test('Convert lbs to kg', function() {
        assert.equal(convertHandler.convert(1, 'lbs'), 0.45359);
    });
    // convertHandler should correctly convert kg to lbs.
    test('Convert kg to lbs', function() {
        assert.equal(convertHandler.convert(0.453592, 'kg'), 1);
    });

});