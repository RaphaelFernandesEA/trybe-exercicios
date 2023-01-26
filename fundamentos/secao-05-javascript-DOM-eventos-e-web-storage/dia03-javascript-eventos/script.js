const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // Exercicio 1
//   Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

// Observação 🔎: Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.

// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>;
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>;
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>.  
// const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const createDecemberCalendarDays = () => {
  const ulDaysElement = document.getElementById('days');
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let liDayElement = document.createElement('li');
    let day = decemberDaysList[index]
    liDayElement.innerText = day;
    ulDaysElement.appendChild(liDayElement);
    if (day === 24 || day === 31 ) {
      liDayElement.className = 'day holiday'
    } else if (day === 4 || day === 11 || day === 18) {
      liDayElement.className = 'day friday'
    } else if (day === 25) {
      liDayElement.className = 'day friday holiday'
    } else {
      liDayElement.className = 'day'
    }
  }
}

createDecemberCalendarDays();

// EXERCICIO 2:
// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”;
// Sua função deve receber um parâmetro com a string 'Feriados';
// Adicione a este botão a ID "btn-holiday";
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

const createHolidayBtn = (value) => {
  const holidayBtn = document.createElement('button');
  holidayBtn.innerText = value;
  holidayBtn.id= 'btn-holiday';
  const div = document.querySelector('.buttons-container');
  div.appendChild(holidayBtn)
}

createHolidayBtn('Feriados');

// EXERCICIO 3:
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday";
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".
// De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.
const holidayBtn = document.querySelector('#btn-holiday');

const changeHolidayBackground = () => {
  const holidays = document.getElementsByClassName('holiday');
  for (let index = 0; index < holidays.length; index += 1) {
    let holiday = holidays[index]
    if (holiday.style.backgroundColor === 'rgb(130, 227, 130)') {
      holiday.style.backgroundColor = 'rgb(238,238,238)'
    } else {
      holiday.style.backgroundColor = 'rgb(130, 227, 130)'
    }
  }
}

holidayBtn.addEventListener('click', changeHolidayBackground);

// EXERCICIO 4:

// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira";
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

const createfridayBtn = (value) => {
  const fridayBtn = document.createElement('button');
  fridayBtn.id = 'btn-friday';
  fridayBtn.innerText = value
  const divBtn = document.querySelector('.buttons-container');
  divBtn.appendChild(fridayBtn)
}

createfridayBtn('Sexta-feira');

// EXERCICIO 5:

// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira;
// Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
// De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.
const changeFridayText = () => {
  const fridaysArray = [4, 11, 18, 25]
  let fridays = document.getElementsByClassName('friday');
  for (let index = 0; index < fridays.length; index +=1) {
    if (fridays[index].innerText !== 'Sextooou!!!') {
      fridays[index].innerText = 'Sextooou!!!';
    } else {
      fridays[index].innerText = fridaysArray[index];
    }
  }
}

const fridayBtn = document.getElementById('btn-friday');
fridayBtn.addEventListener('click', changeFridayText)

// EXERCICIO 6:
// Implemente duas funções que criem um efeito de “zoom”;
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// De olho na dica 👀: Você pode utilizar a propriedade event.target.

const zoomIn = () => {
  let days = document.getElementsByClassName('day');
  // font-size:20px;
  for (let index = 0; index < days.length; index += 1) {
    days[index].addEventListener('mouseover', (event) => {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600'
    })
  }
}

zoomIn();
const zoomOut = () => {
  let days = document.getElementsByClassName('day');
  for (let index = 0; index < days.length; index += 1) {
    days[index].addEventListener('mouseout', (event) => {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200'
    })
  }
}

zoomOut();

// Parte 7
// Implemente uma função que adicione uma tarefa personalizada ao calendário;
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

const addTask = (task) => {
  let inputTask = document.getElementById('task-input');
  console.log(inputTask)
  const newTask = document.createElement('span');
  newTask.className = 'my-tasks'
  newTask.innerText = task;
  const tasksContainer = document.querySelector('.my-tasks')
  tasksContainer.appendChild(newTask);
}

addTask('cozinhar');
// Parte 8
// Implemente uma função que adicione uma legenda com cor para a tarefa;
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task;
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

const addSubTitle = (color) => {
  const div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = color;
  const tasksContainer = document.querySelector('.my-tasks')
  tasksContainer.appendChild(div);
}

addSubTitle('green');
// Parte 9
// Implemente uma função que selecione uma tarefa;
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada;
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.
const selectTask = () => {
  let task = document.querySelector('.task');
  task.addEventListener ('click', function(event){
    if (event.target.className === 'task selected' ){
        event.target.className = 'task';
    } else {
        event.target.className = 'task selected'
    }
  })
}

selectTask();

// Parte 10
// Implemente uma função que atribua a cor da tarefa ao dia do calendário;
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada;
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).
function printCalendarDay() {
  let calendarDay = document.querySelector('#days');
  let selectedTask = document.getElementsByClassName('task selected');
  let taskDiv = document.querySelector('.task');
  let taskDivColor = taskDiv.style.backgroundColor;
  
  calendarDay.addEventListener('click', function(event) {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskDivColor) {
      let color = selectedTask[0].style.backgroundColor;  
      event.target.style.color = color;
    } else if (selectedTask.length >= 0 && eventTargetColor === taskDivColor) {
      event.target.style.color = "rgb(119,119,119)";
    }
})
}
printCalendarDay();


// Bônus
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto “COMPROMISSOS”, adiciona o item à lista “MEUS COMPROMISSOS” ao clicar no botão “ADICIONAR”;
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em “ADICIONAR”;
// Ao pressionar a tecla “enter” o evento também deverá ser disparado.
// De olho na dica 👀: Você pode utilizar a propriedade key.

const createTask = () => {
  let inputTask = document.getElementById('task-input');
  console.log(inputTask)
  const newTask = document.createElement('span');
  newTask.className = 'my-tasks'
  newTask.innerText = inputTask.value;
  const tasksContainer = document.querySelector('.my-tasks')
  tasksContainer.appendChild(newTask);
}

const addBtn = document.querySelector('#btn-add');
// console.log(addBtn)
addBtn.addEventListener('click', createTask);