var readlineSync = require('readline-sync');

const massUnits: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convert(value: number, baseUnit: string, toConvertUnit: string): string {
  const baseIndex = massUnits.indexOf(baseUnit);
  const toConvertIndex = massUnits.indexOf(toConvertUnit);

  const exponent = (toConvertIndex - baseIndex);
  const result = value * Math.pow(10, exponent);

  return (`${value} ${baseUnit} é igual a ${result} ${toConvertUnit}`)
};

export function exec():void {
  const value = readlineSync.question('Converter quanto?');
  const fisrtUnit = readlineSync.question(` De que unidade?
    Unidades aceitas: (${massUnits})`);
  const toConvertUnit = readlineSync.question(`Para qual unidade? 
    Unidades aceitas: (${massUnits})?`);

  console.log(convert(value, fisrtUnit, toConvertUnit));
};
