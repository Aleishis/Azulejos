// Evento que se dispara cuando se termina de cargar el DOM
// DOM: Document Object Model
document.addEventListener("DOMContentLoaded", function(){

    // Declaramos una variable en JS que representa el "btn-ok" en el HTML
    var btnOk = document.getElementById("btn-sumar");

    // Declaramos un evento "click" a ese boton
    btnOk.addEventListener("click", function(){
        // Declaramos una variable que representa el input del HTML
        var largo = parseFloat(document.getElementById("largo").value);
        
        var ancho = parseFloat(document.getElementById("ancho").value)


        // isNaN = is not a number
        if (isNaN(largo) || isNaN(ancho)){
            alert("Solo puedes ingresar numeros")
        }

        

        var resultado = value1Number + value2Number
        // Mostamos alerta del navegador con el contenido del input
        alert("El resultado es: " + resultado)

    })
})
