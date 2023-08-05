document.getElementById("botonSaludo").addEventListener('click', function(e){
    e.stopPropagation();
    alert("Hola!");
});

document.getElementById("divSaludo").addEventListener('click', function(){
    alert("Hola! Soy el div")
})
