// Evento que se dispara cuando se termina de cargar el DOM
// DOM: Document Object Model
document.addEventListener("DOMContentLoaded", function(){

    // Declaramos una variable en JS que representa el "btn-ok" en el HTML
    var btnOk = document.getElementById("btn-calcular");

    // Declaramos un evento "click" a ese boton
    btnOk.addEventListener("click", function(){
        // Declaramos una variable que representa el input del HTML
        var largo = parseFloat(document.getElementById("largo").value);
        
        var ancho = parseFloat(document.getElementById("ancho").value)

        var precio = parseFloat(document.getElementById("precio").value)


        // isNaN = is not a number
        if (isNaN(largo) || isNaN(ancho) || isNaN(precio)){
            alert("Solo puedes ingresar numeros")
        }

        
        var area = (largo*100) * (ancho*100);

        var area_azulejo = 25 * 25

        var costo = (area / area_azulejo) * precio


        
        alert("El costo sera de: " + costo)

    })
})
