const massUnits: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convert(value: number, baseUnit: string, toConvertUnit: string): string {
  const baseIndex = massUnits.indexOf(baseUnit);
  const toConvertIndex = massUnits.indexOf(toConvertUnit);

  const exponent = (toConvertIndex - baseIndex);
  const result = value * Math.pow(10, exponent);

  return (`${value} ${baseUnit} é igual a ${result} ${toConvertUnit}`)
}

console.log(convert(260, 'kg', 'g'));