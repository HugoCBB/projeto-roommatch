
const etapa1  = document.getElementById("etapa-1") 
const etapa2  = document.getElementById("etapa-2") 

const btnProximo = document.getElementById("btn-proximo") 
const btnVoltar  = document.querySelector(".btn-voltar") 

btnProximo.addEventListener("click", (event) => {
  event.preventDefault()

  etapa1.classList.add("is-hidden")
  etapa2.classList.remove("is-hidden")  
}) 

btnVoltar.addEventListener("click", (event) => {
  event.preventDefault()  
  etapa2.classList.add("is-hidden")  
  etapa1.classList.remove("is-hidden") 
}) 
