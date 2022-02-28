window.onload = function(){
  let bodyColor = document.querySelector('#Body-color');
  bodyColor.addEventListener('change', function(){
    let selectedColor = bodyColor.value
    document.body.style.backgroundColor = selectedColor;
  });

  let fontColor = document.getElementsByTagName('Input');
  fontColor.addEventListener('change', function(){
    console.log(fontColor)
  })
}
