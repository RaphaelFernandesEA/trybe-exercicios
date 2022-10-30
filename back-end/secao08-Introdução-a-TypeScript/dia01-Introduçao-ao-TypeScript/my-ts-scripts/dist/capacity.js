"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = exports.convertCapacity = void 0;
var readlineSync = require('readline-sync');
const capacityUnits = ['kl', 'dl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convertCapacity(value, fisrtUnit, convertedUnit) {
    const fisrtIndex = capacityUnits.indexOf(fisrtUnit);
    const toConvertIndex = capacityUnits.indexOf(convertedUnit);
    const exponent = (toConvertIndex - fisrtIndex);
    const result = value * Math.pow(10, exponent);
    return `${value} ${fisrtUnit}s é igual a ${result} ${convertedUnit}s.`;
}
exports.convertCapacity = convertCapacity;
;
function exec() {
    const value = readlineSync.question('Converter quanto?');
    const fisrtUnit = readlineSync.question(` De que unidade?
    Unidades aceitas: (${capacityUnits})`);
    const toConvertUnit = readlineSync.question(`Para qual unidade? 
    Unidades aceitas: (${capacityUnits})?`);
    console.log(convertCapacity(value, fisrtUnit, toConvertUnit));
}
exports.exec = exec;
;
