function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

    // Escreva seu código abaixo.

//   Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    // Escreva seu código abaixo.

//criar a função com nome descritivo
    function createDays () {
        // criar variavel para buscar nossa ul ->>>> TEM que buscar pelo querySelector('')  <<<<---
        let ulDays = document.querySelector('#days');
        //for para percorrer todos os elementos do array dado
        for (let index = 0; index < dezDaysList.length; index += 1) {
            //cria varíavel para armazenar os valores dos dias do array dado
            let day = dezDaysList[index];
            //cria os elementos li do HTML
            let liDay = document.createElement('li');
            //atribui os valores armazenados do array em cada li criada
            liDay.innerText = day;
            //condições para implementar as classes dinamicamente conforme a criacção de cada li, levando em consideração os dados do array dado.
            if(day === 24 | day === 31){
                liDay.className = 'day holiday';
            } else if (day === 4 | day === 11 | day === 18) {
                liDay.className = 'day friday';
            } else if (day === 25){
                liDay.className = 'day friday holiday';
            } else {
                liDay.className = 'day';
            }
            //após a criação de cada elemento dentro do for, adiciona-lo à nossa variavel que contem nossa ul
            ulDays.appendChild(liDay);
        }
    }
    //chamar a função criada
    createDays();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

//criar a função do que sera feito
function createHolidayButton (buttonName) {
    //cria variável  e elemento <button> e atribui os valores de um ao outro
    let button = document.createElement('button');
    //atribui ao texto do nosso botao o parâmetro dado pela questão (nome do botao)
    button.innerText = buttonName;
    //atribui id ao botao atraves da variavel criada para ele
    button.id = 'btn-holiday';
    //cria variável para que possamos acessar a div no qual iremos inserir nosso botao
    let buttonContainer = document.querySelector('.buttons-container');
    //atribui o botao criado como filho da div 
    buttonContainer.appendChild(button);
}
//chamar a função criada para criar o botão
createHolidayButton ("Feriados");


// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

//cria variavel para atribuir valor do elemento botão Feriados
let buttonHoliday = document.querySelector('#btn-holiday');
//atribui escutador de evento click no botao Feriados com execução de funcao de mudanca de background dos dias feriados
buttonHoliday.addEventListener('click', changeHolidayColor);
//cria função para alterar background dos dias de feriado
function changeHolidayColor (event) {
    //cria variavel para ser atribuidos elementos com classe holiday
        let holidayDays = document.getElementsByClassName('holiday');
    //cria for para percorer todos os elementos com a classe holiday
        for (let index = 0; index < holidayDays.length; index += 1) {
        //cria variavel para atribuir os elementos dos dias de feriado (classe holiday)
            let checkHoliday = holidayDays[index];
        //cria condiçao se para o background, atribuindo cor cinza caso seja verde e vice-versa ao ser clicado 
            if(checkHoliday.style.backgroundColor === 'rgb(130, 227, 130)') {    //verde
                checkHoliday.style.backgroundColor = 'rgb(238,238,238)'          //cinza
            } else {
                checkHoliday.style.backgroundColor = 'rgb(130, 227, 130)'        //verde
            }
        }
}


// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

//função para criar o botão da sexta-feira com atribuição do nome conforme parametro dado na função por meio de sting
function createFridayButton(buttonName) {

    //cria a variável button e o elemento <button> e atribui um ao outro
    let button = document.createElement('button');
    //atribui como texto do botão a string colocada como paramentro da função
    button.innerText = buttonName;
    //atribui a ID btn-friday ao botão criado
    button.id = 'btn-friday';
    //cria variável para se atribuir a div de classe buttons-container
    let buttonsContainer = document.querySelector('.buttons-container');
    //atribui o botão (<button>) criado como elemento filho da div buttons-container
    buttonsContainer.appendChild(button);

}
createFridayButton('Sexta-feira');

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

//cria variavel para botão friday e o atribui ao button de ID btn-friday
let fridayButton = document.getElementById('btn-friday');
//adiciona evento escutador de função click ao botao sexta feira
fridayButton.addEventListener('click', changeFridaysText);
//cria variável para armazenas os dias da sexta-feira classe friday
let fridays = document.getElementsByClassName('friday');
//cria array com os valores dos dias da sexta-feira para recuperar os valores trocados por "sextooou !!!"
let arrayFridays = [4, 11, 18, 25];
//cria a função q irá modificar o texto das sexta feiras
function changeFridaysText (event){
    //looping for para percorrer os dias sexta-feira
    for (let index = 0; index < fridays.length; index += 1) {
        //cria uma variável sexta-feira para atribuir cada dia correspondente a cada elemento dos elementos com classe friday
        let friday = fridays[index];
        //condicional if para alterar o texto das sexta-feiras
        if(friday.innerText !== 'Sextooou !!!'){
            friday.innerText = 'Sextooou !!!';
        } else {
            friday.innerText = arrayFridays[index];
        }
    }
}


// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

//cria a função que irá da zoom com o evento do mouse
function zoomIn () {
    //cria variável para ser atribuido o valor onde buscaremos nossos elementos para a ocorrencia do evento da função
    let zoomEfect = document.querySelector('#days');
    //atribuição de escutador de evento com estrutura de função do que fazer qnd ocorrer o evento
    zoomEfect.addEventListener('mouseover', function(event){
        //determinação de ação na ocorrência do evento - aumentar a fonte para o dobro da fonte aplicada
        event.target.style.fontSize = "2em";
    })

}
//chamamento da função
zoomIn()

//cria a função que irá retirar o zoom com o evento do mouse
function zoomOut () {
    //cria variável para ser atribuido o valor onde buscaremos nossos elementos para a ocorrencia do evento da função
    let zoomEfect = document.querySelector('#days');
        //atribuição de escutador de evento com estrutura de função do que fazer qnd ocorrer o evento
    zoomEfect.addEventListener('mouseout' , function(event){
        //determinação de ação na ocorrência do evento - retorna a fonte para o valor inicial (20px)
        event.target.style.fontSize = '20px';
    })
}
//chamamento da função
zoomOut()


// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

//cria função para adicionar tarefa no qual sera atribuido como parametro o nome da propria tarefa
function addTask (taskName) {
    //cria variavel e elemento <span> atribuindo seus valores um ao outro
    let task = document.createElement('span');
    //cria variável para ser atribuido o valor da div com classe my-tasks para receber a terefa recem criada como filha
    let myTasksContainer = document.querySelector('.my-tasks');
    //determina que o nome da tarefa (elemento <span>) será o parâmetro dado pela função
    task.innerText = taskName; 
    //adiciona a tarefa criada como filho da div my-tasks
    myTasksContainer.appendChild(task);
}
//chama a função criada com o parametro dado
addTask('Cozinhar');


// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

//cria a função que cria uma Div e recebe como parametro uma cor utilizada como background
function addSubtitle (color) {
    //cria variável e elemento <div> atribuindo seus valores um ao outro
    let subtitle = document.createElement('div');
    //cria variável para se atribuir o valor da div myTasksContainer (div .my-tasks)
    let myTasksContainer = document.querySelector('.my-tasks');
    //atribui a classe task ao elemento criado
    subtitle.className = 'task';
    //atribui a cor colocada como parâmetro da função como cor de fundo do elemento
    subtitle.style.backgroundColor = color;
    //Adiciona o elemento criado como filho da div myTaskContainer
    myTasksContainer.appendChild(subtitle);
}
//chama a função
addSubtitle('green');


// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

//cria a função para selecionar uma tarefa
function selectTask () {
    //cria variável e atribui a ela a div com classe .task para ser selecionada
    let task = document.querySelector('.task');
    //adiciona evento escutador de click na div em questão e já cria função anonima para execução da seleção ao ocorrer o evento click
    task.addEventListener ('click', function(event){
        //condicional de atribuição e retorno da classe selecionada
        if (event.target.className === 'task selected' ){
            event.target.className = 'task';
        } else {
            event.target.className = 'task selected'
        }
    })
}
//chamamento da função
selectTask();


// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

//cria função para pintar os dias do calendario
function printCalendarDay() {
    //cria variavel para atribuirmos os elementos da ul dom ID days
    let calendarDay = document.querySelector('#days');
    //cria variável para atribuirmos o elemento div com a classe task selected
    let selectedTask = document.getElementsByClassName('task selected');
    //cria variável para atribuirmos o elemento com classe task
    let taskDiv = document.querySelector('.task');
    //cria elmento para armazenarmos o valor da col do elemento div 
    let taskDivColor = taskDiv.style.backgroundColor;
    //adiociona escutador de evento click aos elementos (dias) da ul com ID days com função anonima para a executação apos evento
    calendarDay.addEventListener('click', function(event){
        //cria variável para atribuir o valor da cor do elemento que sofre o click
        let eventTargetColor = event.target.style.color;
        //condicional que verifica se há elemento selecionado (classe task selected) e se a cor do elemento que sofre o click é difente ao da Div de legenda
        if (selectedTask.length > 0 && eventTargetColor !== taskDivColor){
            //cria variável para atribuir a cor da div selecionada. Uso do [0] porque o getElementsByClass volta um conjunto de elementos
            let color = selectedTask[0].style.backgroundColor;
            //sendo a cor diferente atribui a cor do elemento alvo do click igual a cor do elemento selecionado
            event.target.style.color = color;
            //segunda condicional que verifica ainda se há elemento selecionado e confere se a cor é igual ao da div legenda
        } else if (selectedTask.length > 0 && eventTargetColor === taskDivColor) {
            //sendo a cor igual, muda para uma diferente (rgb(119,119,119)) cor padrão
            event.target.style.color = "rgb(119,119,119)";
        }
    })
}
// chama a função
printCalendarDay()


// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key .
