const createPw = document.querySelector("#create_pw"),
 confirmPw = document.querySelector("#confirm_pw"),
 pwShow = document.querySelector(".show"),
 alertIcon = document.querySelector(".error"),
 alertText= document.querySelector(".text"),
 submitBtn = document.querySelector("#button");

 pwShow.addEventListener("click", ()=>{
   if((createPw.type === "password") && (confirmPw.type === "password")){
     createPw.type = "text";
     confirmPw.type = "text";
     pwShow.classList.replace("fa-eye-slash","fa-eye");
   }else {
     createPw.type = "password";
     confirmPw.type = "password";
     pwShow.classList.replace("fa-eye","fa-eye-slash");
   }
 });

 createPw.addEventListener("input", ()=>{
   let val = createPw.value.trim()
   if(val.length >= 8){
     confirmPw.removeAttribute("disabled");
     submitBtn.removeAttribute("disabled");
     submitBtn.classList.add("active");
   }else {
     confirmPw.setAttribute("disabled", true);
     submitBtn.setAttribute("disabled", true);
     submitBtn.classList.remove("active");
     confirmPw.value = "";
     alertText.style.color = "#a6a6a6";
     alertText.innerText = "Insira pelo menos 8 caracteres";
     alertIcon.style.display = "none";
   }
 });

submitBtn.addEventListener("click", ()=>{
 if(createPw.value === confirmPw.value){
   alertText.innerText = "Senhas correspondem";
   alertIcon.style.display = "Nenhum";
   alertText.style.color = "#4070F4";
 }else {
   alertText.innerText = "Senhas não correspondem ";
   alertIcon.style.display = "Bloqueado";
   alertText.style.color = "#D93025";
 }
});
