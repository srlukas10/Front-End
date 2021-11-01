let section = document.querySelector("section"),
icons = document.querySelector(".icons");

icons.onclick = ()=>{
  section.classList.toggle("dark");
}

//cria uma função e chamando-a a cada segundos
setInterval(()=>{

  let date = new Date(),
  hour = date.getHours(),
  min = date.getMinutes(),
  sec = date.getSeconds();

  let d;
  //se a hora for menor que 12, seu valor será AM, caso contrário, seu valor será pm
  d = hour < 12 ? "AM" : "PM"; 

  //adiciona 0 à frente de todos os valores se eles forem menores que 10
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  document.querySelector(".hour_num").innerText = hour;
  document.querySelector(".min_num").innerText = min;
  document.querySelector(".sec_num").innerText = sec;
  document.querySelector(".am_pm").innerText = d;

}, 1000); //1000 milissegundos = 1s