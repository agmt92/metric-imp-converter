unitArr = ["gal", "l", "mi", "km", "lbs", "kg"];

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.split(/[a-zA-Z]/)[0];
    if (result === "") {
      result = 1;
    } else if (result === '0') {
      return false;
    }
     else {
      result = result.split("/").length > 2 ? false : eval(result);
    }
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    let resultArr = input.split(/[-+*/0-9](?!.*[-+*/0-9])/);
    result = resultArr[resultArr.length - 1].toLowerCase();
    if (!result) {
      result = false;
      return result;
    } else if (result === "l") {
      result = "L";
      return result;
    } else if (!unitArr.includes(result)) {
      result = false;
      return result;
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch (initUnit) {
      case "gal":
        result = "L";
        break;
      case "L":
        result = "gal";
        break;
      case "l":
        result = "gal";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case false:
        result = false;
        break;
      default:
        result = false;
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch (unit) {
      case "gal":
        result = "gallons";
        break;
      case "L":
        result = "liters";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case false:
        result = false;
        break;
      default:
        result = false;
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "L":
        result = initNum / galToL;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      default:
        result = false;
        break;
    } if (!result) {
      return result;
    } else {
      result = parseFloat(result.toFixed(5));
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    console.log(initNum, initUnit, returnNum, returnUnit);
    if (!initNum && !returnUnit) {
      result = "invalid number and unit";
      return result;
    } else if (!initNum && !initUnit) {
      result = "invalid number";
      return result;
    } else if (!returnNum) {
      result = "invalid number";
      return result;
    } else {
      result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${parseFloat(returnNum.toFixed(5))} ${this.spellOutUnit(returnUnit)}`;
    }
    return result;
  };
  
}

module.exports = ConvertHandler;