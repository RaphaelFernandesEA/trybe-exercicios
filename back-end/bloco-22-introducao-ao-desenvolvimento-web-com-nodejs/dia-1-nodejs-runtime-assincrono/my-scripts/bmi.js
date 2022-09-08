const readlineSync = require('readline-sync');

const MAX_AND_MIN_BMI = {
  Magreza: {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Peso normal': {
    minBMI: 18.50,
    maxBMI: 24.99,
  },
  'Acima do peso (sobrepeso)': {
    minBMI: 25,
    maxBMI: 29.99,
  },
  'Obesidade Grau I': {
    minBMI: 30,
    maxBMI: 34.99,
  },
  'Obesidade Grau II': {
    minBMI: 35,
    maxBMI: 39.99,
  },
  'Obesidade Grau III e IV': {
    minBMI: 40,
    maxBMI: 100,
  },
};

function calcBMI(weigth, height) {
  const bmi = weigth / (height * height);
  const statusStings = Object.keys(MAX_AND_MIN_BMI);
  // console.log(statusStings);
  const status = statusStings.find((element) => {
    const { maxBMI, minBMI } = MAX_AND_MIN_BMI[element];
    return bmi >= minBMI && bmi <= maxBMI;
  });

  console.log(`Your BMI is: ${bmi.toFixed(2)};
  Status: ${status}`);
  
}
const weigth = readlineSync.questionFloat('What your weight(kg)? ');
const heigth = readlineSync.questionFloat('What your height(m)? ');

calcBMI(weigth, heigth);

