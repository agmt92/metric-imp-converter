class ConvertHandler {
  
  getNum(input) {
    if (input === null) {
      return 1;
    }
    const result = input.match(/[\d./]+/);
    return result ? result[0] : 1;
  }
  
  getUnit(input) {
    if (input === null) {
      return null;
    }
    const result = input.match(/[a-zA-Z]+/);
    return result ? result[0] : 'invalid unit';
  }
  
  getReturnUnit(initUnit) {
    if (!initUnit) {
      return 'invalid unit';
    }
    const unit = initUnit.toLowerCase();
    switch (unit) {
      case 'gal':
        return 'L';
      case 'l':
        return 'gal';
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';
      case 'mi':
        return 'km';
      case 'km':
        return 'mi';
      default:
        return 'invalid unit';
    }
  }

  spellOutUnit(unit) {
    if (!unit) {
      return 'invalid unit';
    }
    const unitLower = unit.toLowerCase();
    switch (unitLower) {
      case 'gal':
        return 'gallons';
      case 'l':
        return 'liters';
      case 'lbs':
        return 'pounds';
      case 'kg':
        return 'kilograms';
      case 'mi':
        return 'miles';
      case 'km':
        return 'kilometers';
      default:
        return 'invalid unit';
    }
  }
  
  convert(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch (initUnit.toLowerCase()) {
      case 'gal':
        return initNum * galToL;
      case 'l':
        return initNum / galToL;
      case 'lbs':
        return initNum * lbsToKg;
      case 'kg':
        return initNum / lbsToKg;
      case 'mi':
        return initNum * miToKm;
      case 'km':
        return initNum / miToKm;
      default:
        return 'invalid unit';
    }
  }

  getString(initNum, initUnit, returnNum, returnUnit) {
    if (initUnit === 'invalid unit') {
      return 'invalid unit';
    }
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`;
  }
  
}

module.exports = ConvertHandler;