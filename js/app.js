const submit = document.getElementById("submit");
const form = document.querySelector("form");
const name = document.getElementById("#name");

const reseña = document.querySelector("#reseña");
const contador = document.querySelector(".contador");
const aumentar = document.querySelector(".aumentar");
const limite = document.querySelector(".limite");

submit.addEventListener("submit", (event)=> {
    event.preventDefault();
     
    confirm("¿estas seguro de enviar los datos?");
    alert("gracias por enviarlos");
    form.style.boxShadow = "0 0 20px #fff";

});

reseña.addEventListener("input", (e) => {
  
  aumentar.textContent = e.target.value.length;

  if(e.target.value.length === 250){
    limite.style.color = "#fa0606";
  } else{
    aumentar.style.color = "#2bff01";
    limite.style.color = "#fff";
  };

});