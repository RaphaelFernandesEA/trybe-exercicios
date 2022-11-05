var readlineSync = require('readline-sync');

import * as Area from './area';
import * as Capacity from './capacity';
import * as Length from './length';
import * as Mass from './mass';
import * as Volume from './volume';

function chooseUnitToConvert(): void{
  const unitToConvert = readlineSync.question(`Que tipo de conversão você quer fazer?
  (area, capacidade, comprimentp, massa ou volume)`)
  switch (unitToConvert){
    case 'area':
      Area.exec();
      break;
    case 'capacidade':
      Capacity.exec();
      break;
    case 'comprimento':
      Length.exec();
      break;
    case 'massa':
      Mass.exec();
      break;
    case 'volume':
      Volume.exec();
      break;  
    default:
      console.log(`Desculpe ${unitToConvert} não é um tipo de conversão conhecido.`)
  };  
};

chooseUnitToConvert();
