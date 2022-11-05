var readlineSync = require('readline-sync');

const areaUnits: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
export function convertArea(value: number, fisrtUnit: string, convertedUnit: string): string {
  const fisrtIndex = areaUnits.indexOf(fisrtUnit);
  const toConvertIndex = areaUnits.indexOf(convertedUnit);
  const exponent = (toConvertIndex - fisrtIndex);
  const result = value * Math.pow(10, exponent * 2);

  return `${value} ${fisrtUnit}s é igual a ${result} ${convertedUnit}s.`;
}

export function exec():void {
  const value = readlineSync.question('Converter quanto?');

  const units = areaUnits.map((unit) => `${unit}²`)

  const fisrtUnit = readlineSync.question(` De que unidade?
    Unidades aceitas: (${units})`);
  const toConvertUnit = readlineSync.question(`Para qual unidade? 
    Unidades aceitas: (${units})`);

  console.log(convertArea(value, fisrtUnit, toConvertUnit));
}


