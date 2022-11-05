"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
var readlineSync = require('readline-sync');
const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convert(value, baseUnit, toConvertUnit) {
    const baseIndex = massUnits.indexOf(baseUnit);
    const toConvertIndex = massUnits.indexOf(toConvertUnit);
    const exponent = (toConvertIndex - baseIndex);
    const result = value * Math.pow(10, exponent);
    return (`${value} ${baseUnit} é igual a ${result} ${toConvertUnit}`);
}
;
function exec() {
    const value = readlineSync.question('Converter quanto?');
    const fisrtUnit = readlineSync.question(` De que unidade?
    Unidades aceitas: (${massUnits})`);
    const toConvertUnit = readlineSync.question(`Para qual unidade? 
    Unidades aceitas: (${massUnits})?`);
    console.log(convert(value, fisrtUnit, toConvertUnit));
}
exports.exec = exec;
;
