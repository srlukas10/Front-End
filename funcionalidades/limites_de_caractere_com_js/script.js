//Script que faz o box funcionar do jeito que queremos

// Primeiro, temos que definir e relacionar algumas variáveis.
let inputBox = document.querySelector(".input-box"),
textarea = inputBox.querySelector("textarea"),
signalNum = inputBox.querySelector(".signal_num");

textarea.addEventListener("keyup", ()=>{
    //comprimento do valor da área de texto armazenado em valLength
  let valLenght = textarea.value.length; 
    //sinal convertido Num Texto interno por valLength
  signalNum.innerText = valLenght;
  //se valLength for maior que 0, então adicione a classe ativa, se não, remova a classe ativa
  (valLenght > 0) ? inputBox.classList.add("active") : inputBox.classList.remove("active");
  //se valLength for maior que 100, então adicione a classe de erro, se não, remova a classe de erro
  (valLenght > 100) ? inputBox.classList.add("error") : inputBox.classList.remove("error"); 

  console.log(valLenght)
});
