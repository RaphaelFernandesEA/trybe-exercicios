"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = exports.convertArea = void 0;
var readlineSync = require('readline-sync');
const areaUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convertArea(value, fisrtUnit, convertedUnit) {
    const fisrtIndex = areaUnits.indexOf(fisrtUnit);
    const toConvertIndex = areaUnits.indexOf(convertedUnit);
    const exponent = (toConvertIndex - fisrtIndex);
    const result = value * Math.pow(10, exponent * 2);
    return `${value} ${fisrtUnit}s é igual a ${result} ${convertedUnit}s.`;
}
exports.convertArea = convertArea;
function exec() {
    const value = readlineSync.question('Converter quanto?');
    const units = areaUnits.map((unit) => `${unit}²`);
    const fisrtUnit = readlineSync.question(` De que unidade?
    Unidades aceitas: (${units})`);
    const toConvertUnit = readlineSync.question(`Para qual unidade? 
    Unidades aceitas: (${units})`);
    console.log(convertArea(value, fisrtUnit, toConvertUnit));
}
exports.exec = exec;
