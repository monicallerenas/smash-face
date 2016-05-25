var numeroAlAzar = 0 ;
var imagenes = [
 "Ana.jpg", "Analy.jpg", 
 "Areli.jpg", "Beatriz.jpg", 
 "Cecilia.jpg", "Claudia.jpg", 
 "Daniela.jpg", "Elisa.jpg", 
 "Evelyn.jpg", "Gabriela.jpg", 
 "Grissel.jpg", "Guadalupe.jpg", 
 "Johana.jpg", "Joyce.jpg", 
 "Ofelia.jpg", "Patricia.jpg", 
 "Sharon.jpg", "Heredia.jpg", 
 "Karen.jpg", "Monica.jpg",  
 "Karla.jpg", "Leslie.jpg", 
 "Mishel.jpg", "Milca.jpg", 
 "Tayde.jpg", "Naibit.jpg", 
 "Nayeli.jpg", "Nelly.jpg", 
 "Reyna.jpg", "Adriana.jpg", 
 "Ruth-Lopez.jpg","Ruth-Vega.jpg",
 "Sandra-Bollo.jpg","Sandra-Diaz.jpg", 
 "Vianey.jpg", "Zazil.jpg"];

 var nombres = [ 
 "Anita", "Analy", 
 "Areli", "Bet",
 "Cecy", "Claudia", 
 "Daniela", "Elisa", 
 "Eve", "Gaby", 
 "Griss", "Lupita", 
 "Joy", "Joyce", 
 "Ofe", "Paty", 
 "Sharon", "Heredia", 
 "Karen", "Moni", 
 "Karla", "Leslie",
 "Mishel", "Milca", 
 "Tayde", "Naibit", 
 "Nayeli", "Nelly", 
 "Reyna", "Adri", 
 "Dj Ruth", "Ruth", 
 "Sandia", "San", 
 "Vian", "Zaz"];
 
 var indiceActual = 0;
 var puntos = 0;
 var intentos = 0;

function desplegarPuntaje() {
  $("#spanPuntos").text(puntos);

}
function enteroRandomEnRango(min, max) {
  var numero = Math.random() * (max - min)+ min;
  var entero = Math.floor(numero);
  return entero;
  // body...
};

 function desplegarNuevaJugada() {
    var tamanoArreglo = nombres.length;

    if (tamanoArreglo > 0){
      numeroAlAzar = enteroRandomEnRango(0,tamanoArreglo);
      var imagen = "fotos/" + imagenes[numeroAlAzar];
      $("#imagenPersona").attr("src", imagen);
    } else {
      alert("Ganaste!!");
    }

};

$(document).ready(function(){

    $("#btnRevisar").click(function() {
      var nombre = $('#inputNombre').val();
      console.log("El usuario escribio:" + nombre);

      var nombreAdivinar = nombres[numeroAlAzar];
      console.log("El nombre correcto es:" + nombreAdivinar);

      if (nombre === nombreAdivinar) {
        puntos = puntos + 5;

        nombres.splice(numeroAlAzar, 1);
        imagenes.splice(numeroAlAzar, 1);
        
        desplegarNuevaJugada();
      } else {
        alert("El nombre es incorrecto!");
        puntos = puntos -1;
        intentos = intentos +5;
      }
      desplegarPuntaje();
    });
      desplegarNuevaJugada();
});


 