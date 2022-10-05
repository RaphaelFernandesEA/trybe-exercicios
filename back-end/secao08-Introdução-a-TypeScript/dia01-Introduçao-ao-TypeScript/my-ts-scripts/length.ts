const lengthUnits = ["km", "hm", "dam", "m", "dm", "cm", "mm"]

function convertLength(value: number, fisrtUnit: string, convertedUnit: string): number {
  const fisrtIndex = lengthUnits.indexOf(fisrtUnit);
  const toConvertIndex = lengthUnits.indexOf(convertedUnit);
  const exponent = (toConvertIndex - fisrtIndex);

  return value * Math.pow(10, exponent);

}