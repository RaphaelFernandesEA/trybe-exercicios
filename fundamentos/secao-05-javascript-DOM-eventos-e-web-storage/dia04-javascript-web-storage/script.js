// Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito em que a pessoa usuária pode escolher as configurações da página.

// As pessoas devem ter o poder de alterar:

// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte (Font family).
// Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.

// Você também recebeu a imagem de referencia para orientação de como a página ficará quando estiver pronta.

// Referência do leitor de conteúdos.
// Referência do leitor de conteúdos.
// Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.

const div = document.getElementById("elemento-pai")

const ulColorsBck = document.createElement('ul');
ulColorsBck.innerText = "Cor de fundo";
div.appendChild(ulColorsBck);

const colorsName = ["white", "black", "green", "blue", "yellow", "red"];

const changeBackGroundColor = (color) => {
  div.style.backgroundColor = color;
  localStorage.setItem("backgroundColor", color)
}

colorsName.map((color) => {
  let listColor = document.createElement('li');
  listColor.className = "background-list"
  listColor.style.listStyleType = "none";
  let button = document.createElement('button');
  listColor.appendChild(button);
  button.innerText = color;
  button.addEventListener("click", (event) => changeBackGroundColor(event.target.innerText))
  ulColorsBck.appendChild(listColor);
});

const ulFonts = document.createElement("ul");
ulFonts.innerText = "Cor da fonte";
div.appendChild(ulFonts);

const fontColors = [ "black", "red", "white"];

const changefontColor = (color) => {
  let content = document.getElementsByTagName("p")
  for (let index = 0; index < content.length; index += 1) {
    content[index].style.color = color;   
  }
  localStorage.setItem("fontColor", color);
}

fontColors.map((color) => {
  let fontColor = document.createElement('li');
  fontColor.className = "fontColors-list"
  fontColor.style.listStyleType = "none";
  let button = document.createElement('button');
  fontColor.appendChild(button);
  button.addEventListener("click", (event) => changefontColor(event.target.innerText));
  button.innerText = color;
  ulFonts.appendChild(fontColor);
})

const ulFontSize = document.createElement("ul");
ulFontSize.innerText = "Tamanho da fonte";
div.appendChild(ulFontSize);

const fontSize = ["8pt", "10pt", "12pt", "14pt", "20pt"];

const changeFontSize = (size) => {
  div.style.fontSize = size;
  localStorage.setItem("fontSize", size)
}

fontSize.map((color) => {
  let fontSize = document.createElement('li');
  fontSize.className = "fontSizes-list"
  fontSize.style.listStyleType = "none";
  let button = document.createElement('button');
  button.innerText = color;
  button.addEventListener("click", (event) => changeFontSize(event.target.innerText))
  fontSize.appendChild(button);
  ulFontSize.appendChild(fontSize);
});

const ulSpace = document.createElement("ul");
ulSpace.innerText = "Espaçamento entre linhas";
div.appendChild(ulSpace);

const space = ["1", "normal", "1.5", "2", "3"];

const changeLineHeight = (space) => {
  let content = document.getElementsByTagName("p")
  for (let index = 0; index < content.length; index += 1) {
    content[index].style.lineHeight = space;   
  }
  localStorage.setItem("lineHeight", space);
}

space.map((color) => {
  let fontSpace = document.createElement('li');
  fontSpace.className = "fontSpaces-list"
  fontSpace.style.listStyleType = "none";
  let button = document.createElement('button');
  button.innerText = color;
  button.addEventListener("click", (e) => changeLineHeight(e.target.innerText))
  fontSpace.appendChild(button);
  ulSpace.appendChild(fontSpace);
});

const ulFontType = document.createElement("ul");
ulFontType.innerText = "Tipo de fonte";
div.appendChild(ulFontType);

const fontType = ["Arial", "Times New Roman"];

const changeFontFamily = (type) => {
  div.style.fontFamily = type;
  localStorage.setItem("fontFamily", type);
}

fontType.map((color) => {
  let fontType = document.createElement('li');
  fontType.className = "fontTypes-list"
  fontType.style.listStyleType = "none";
  let button = document.createElement('button');
  button.innerText = color;
  button.addEventListener("click", (e) => changeFontFamily(e.target.innerText));
  fontType.appendChild(button);
  ulFontType.appendChild(fontType);
})

const content = () => {
  const p = document.createElement("p")
  div.appendChild(p);
  p.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

content();
content();
content();
content();

const initialize = () => {
  const fontSize = localStorage.getItem("fontSize");
  changeFontSize(fontSize);

  const lineHeight = localStorage.getItem("lineHeight");
  changeLineHeight(lineHeight);

  const fontFamily = localStorage.getItem("fontFamily");
  changeFontFamily(fontFamily);

  const backgroundColor = localStorage.getItem("backgroundColor");
  changeBackGroundColor(backgroundColor);
  
  const fontColor = localStorage.getItem("fontColor");
  changefontColor(fontColor);
}

initialize();



