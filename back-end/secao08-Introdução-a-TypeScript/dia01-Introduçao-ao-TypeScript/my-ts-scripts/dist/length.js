"use strict";
const lengthUnits = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convertLength(value, fisrtUnit, convertedUnit) {
    const fisrtIndex = lengthUnits.indexOf(fisrtUnit);
    const toConvertIndex = lengthUnits.indexOf(convertedUnit);
    const exponent = (toConvertIndex - fisrtIndex);
    return value * Math.pow(10, exponent);
}
