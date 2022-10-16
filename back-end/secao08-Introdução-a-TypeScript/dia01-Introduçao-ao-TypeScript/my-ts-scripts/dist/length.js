"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertLength = void 0;
const lengthUnits = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convertLength(value, fisrtUnit, convertedUnit) {
    const fisrtIndex = lengthUnits.indexOf(fisrtUnit);
    const toConvertIndex = lengthUnits.indexOf(convertedUnit);
    const exponent = (toConvertIndex - fisrtIndex);
    const result = value * Math.pow(10, exponent);
    return `${value} ${fisrtUnit}s é igual a ${result} ${convertedUnit}s.`;
}
exports.convertLength = convertLength;
