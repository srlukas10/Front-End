let buttons = document.querySelectorAll(".button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e)=>{
    e.preventDefault(); // Isso que impede o envio do formulário, já que queremos apenas visualizar o efeito de ondulação
    //Aqui criamos uma tag 
    let overlay = document.createElement('span'); 
    //Adicionando uma classe dentro do intervalo
    overlay.classList.add("overlay");
    //Adicionando tag de sobreposição dentro da tag âncora em HTML
    e.target.appendChild(overlay); 

    //Isso aqui garante o valor que queremos quando o usuário clica no botão
    let xValue = e.clientX - e.target.offsetLeft; 
    let yValue = e.clientY - e.target.offsetTop; 
    
    //Cereja do bolo eu diria. É isso que muda a sobreposição de acordo com o clique no botão independente da posição.
     overlay.style.left = xValue + "px"; 
     overlay.style.top = yValue + "px"; 
});
}
