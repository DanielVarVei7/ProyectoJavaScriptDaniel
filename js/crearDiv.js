let Boton=document.getElementById("Boton")

Boton.addEventListener=("Click",function(event){
    event.defaultPteventad();


    let nuevoID=document.createElement("div");
    nuevoID.innerHTML="DIV creado";
    
    let contenido=document.getElementById("ResultadoDIV");
    contenido.appendChild(nuevoID);

})