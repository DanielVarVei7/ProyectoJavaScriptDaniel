function Sumar() {

    let dato1=document.getElementById("Numero1").value;
    let dato2=document.getElementById("Numero2").value;
    let resultadototal=document.getElementById("Resultado");
    let resultadosuma=parseFloat(dato1)+ parseFloat(dato2);

    

    if (dato1=="" || dato2==""){ alert("El campo está vacio.")}
    else { resultadototal.innerHTML="El Resultado es: " + resultadosuma;}

}

function Restar() {

    let dato1=document.getElementById("Numero1").value;
    let dato2=document.getElementById("Numero2").value;
    let resultadototal=document.getElementById("Resultado");
    let resultadoresta=parseFloat(dato1)- parseFloat(dato2);

    

    if (dato1=="" || dato2==""){ alert("El campo está vacio.")}
    else { resultadototal.innerHTML="El Resultado es: " + resultadoresta;}

}


    