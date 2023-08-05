
document.getElementById('divSaludo').addEventListener('click', function(e){
    e.stopPropagation();
    alert("Hola! Soy el div")
});

document.getElementById('botonSaludo').addEventListener('click', function(){
    
    alert("Hola!");
});

