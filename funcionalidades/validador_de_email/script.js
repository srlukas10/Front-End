//obtendo todos os atributos do HTML
const form = document.querySelector("form"),
eInput = form.querySelector(".input"),
text = form.querySelector(".text");
form.addEventListener("submit", (e)=>{
  //impedindo o envio do formulário
  e.preventDefault(); 
  //Padrão Regex para validar e-mail
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
  form.classList.add("error");
  form.classList.remove("valid");
  if(eInput.value == ""){
    text.innerText = "Email não pode ficar em branco";
  }else if (!eInput.value.match(pattern) ) { 
    //se o padrão não corresponder ao valor inserido pelo usuário
    text.innerText = "Email inválido";
  }else{
    form.classList.replace("error" , "valid"); 
    //substituindo a classe de erro por uma classe válida
    text.innerText = "Este email é válido";
  }
});
