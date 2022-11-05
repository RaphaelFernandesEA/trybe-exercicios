var readlineSync = require('readline-sync');

const lengthUnits = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

export function convertLength(value: number, fisrtUnit: string, convertedUnit: string): string {
  const fisrtIndex = lengthUnits.indexOf(fisrtUnit);
  const toConvertIndex = lengthUnits.indexOf(convertedUnit);
  const exponent = (toConvertIndex - fisrtIndex);
  const result = value * Math.pow(10, exponent);

  return `${value} ${fisrtUnit}s é igual a ${result} ${convertedUnit}s.`;

};

export function exec():void {
  const value = readlineSync.question('Converter quanto?');
  const fisrtUnit = readlineSync.question(` De que unidade?
    Unidades aceitas: (${lengthUnits})`);
  const toConvertUnit = readlineSync.question(`Para qual unidade? 
    Unidades aceitas: (${lengthUnits})?`);

  console.log(convertLength(value, fisrtUnit, toConvertUnit));
};