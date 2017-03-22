var d = document.getElementById("dibujito");
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");
boton.addEventListener("click", dibujoPorClick );

var lienzo = d.getContext("2d");
var ancho = d.width;


function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
 var xxx = parseInt(texto.value);
  console.log(texto);

  var lineas = xxx;
  var l = 0;
  var yi, xf;
  var colorcito = "pink";
  var espacio = ancho / lineas;

  while (l < lineas)
  {
    xf = espacio * l;
    yi = espacio * (l + 1);
    dibujarLinea (colorcito, 0, xf, yi, 300);
    console.log("Linea" + 1);
    l = l + 1; /*l++ para sumar uno automaticamente*/
  }

  dibujarLinea(colorcito, 1,1,1,299);
  dibujarLinea(colorcito, 1,299,299,299);
}
