const reseña = document.querySelector("#reseña");
const contador = document.querySelector(".contador");
const aumentar = document.querySelector(".aumentar");
const limite = document.querySelector(".limite");

reseña.addEventListener("input", (e) => {
  
  aumentar.textContent = e.target.value.length;

  if(e.target.value.length === 250){
    limite.style.color = "#fa0606";
  } else{
    aumentar.style.color = "#2bff01";
    limite.style.color = "#fff";
  };

});