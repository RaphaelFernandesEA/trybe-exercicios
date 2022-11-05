"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = exports.convertVolume = void 0;
var readlineSync = require('readline-sync');
const volumeUnits = ['km³', 'dl³', 'dal³', 'l³', 'dl³', 'cl³', 'ml³'];
function convertVolume(value, fisrtUnit, convertedUnit) {
    const fisrtIndex = volumeUnits.indexOf(fisrtUnit);
    const toConvertIndex = volumeUnits.indexOf(convertedUnit);
    const exponent = (toConvertIndex - fisrtIndex);
    const result = value * Math.pow(10, exponent * 3);
    return `${value} ${fisrtUnit}s é igual a ${result} ${convertedUnit}s.`;
}
exports.convertVolume = convertVolume;
;
function exec() {
    const value = readlineSync.question('Converter quanto?');
    const fisrtUnit = readlineSync.question(` De que unidade?
    Unidades aceitas: (${volumeUnits})`);
    const toConvertUnit = readlineSync.question(`Para qual unidade? 
    Unidades aceitas: (${volumeUnits})?`);
    console.log(convertVolume(value, fisrtUnit, toConvertUnit));
}
exports.exec = exec;
;
