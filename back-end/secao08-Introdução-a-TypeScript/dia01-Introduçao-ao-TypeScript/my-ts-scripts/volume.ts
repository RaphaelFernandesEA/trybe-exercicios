var readlineSync = require('readline-sync');

const volumeUnits: string[] = ['km³', 'dl³', 'dal³', 'l³', 'dl³', 'cl³', 'ml³'];
export function convertVolume(value: number, fisrtUnit: string, convertedUnit: string): string {
  const fisrtIndex = volumeUnits.indexOf(fisrtUnit);
  const toConvertIndex = volumeUnits.indexOf(convertedUnit);
  const exponent = (toConvertIndex - fisrtIndex);
  const result = value * Math.pow(10, exponent * 3);

  return `${value} ${fisrtUnit}s é igual a ${result} ${convertedUnit}s.`;

};

export function exec():void {
  const value = readlineSync.question('Converter quanto?');
  const fisrtUnit = readlineSync.question(` De que unidade?
    Unidades aceitas: (${volumeUnits})`);
  const toConvertUnit = readlineSync.question(`Para qual unidade? 
    Unidades aceitas: (${volumeUnits})?`);

  console.log(convertVolume(value, fisrtUnit, toConvertUnit));
};
