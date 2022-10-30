var readlineSync = require('readline-sync');

const capacityUnits: string[] = ['kl', 'dl', 'dal', 'l', 'dl', 'cl', 'ml'];
export function convertCapacity(value: number, fisrtUnit: string, convertedUnit: string): string {
  const fisrtIndex = capacityUnits.indexOf(fisrtUnit);
  const toConvertIndex = capacityUnits.indexOf(convertedUnit);
  const exponent = (toConvertIndex - fisrtIndex);
  const result = value * Math.pow(10, exponent);

  return `${value} ${fisrtUnit}s é igual a ${result} ${convertedUnit}s.`;

};

export function exec():void {
  const value = readlineSync.question('Converter quanto?');
  const fisrtUnit = readlineSync.question(` De que unidade?
    Unidades aceitas: (${capacityUnits})`);
  const toConvertUnit = readlineSync.question(`Para qual unidade? 
    Unidades aceitas: (${capacityUnits})?`);

  console.log(convertCapacity(value, fisrtUnit, toConvertUnit));
};
