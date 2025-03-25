const submit = document.getElementById("submit");
const form = document.querySelector("form")
const name = document.getElementById("#name");

submit.addEventListener("submit", ()=> {
     
    confirm("¿estas seguro de enviar los datos?");
    alert("gracias por enviarlos");
    form.style.boxShadow = "0 0 20px #fff";

});

