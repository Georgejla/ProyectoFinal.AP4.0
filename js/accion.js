const boton1 = document.getElementById("boton1");
boton1.addEventListener("click", function(e){
    console.log("Se hizo click en el boton");
    document.body.innerHTML = "<h1>Jorge Luis Albera, Tel: 3564215716, San Francisco, Córdoba <h1>";
})