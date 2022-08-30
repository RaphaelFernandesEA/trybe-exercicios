const readlineSync = require('readline-sync')

const bmi = (weigth, height) => {
  const result = weigth / (height * height)
  let status = ""
  if(result < 18,5){
    status = "Magreza"
  }
  if(result >= 18,5 && result < 25){
    status = "Pseo normal"
  }
  if(result >= 25 && result < 30){
    status = "Acima do peso (sobrepeso)"
  }
  if(result >= 30 && result < 35){
    status = "Obesidade grau I"
  }
  if(result >= 35 && result < 40){
    status = "Obesidade grau II"
  }
  if(result > 40){
    status = "Obesidades graus III e IV"
  }

  console.log(`Your BMI is: ${result.toFixed(2)}
  Status: ${status}`)

}

// bmi(94, 1.71)

const weigth = readlineSync.questionFloat("What' your weight(kg)? ");
const heigth = readlineSync.questionFloat("What' your height(m)? ");

bmi(weigth, heigth);


