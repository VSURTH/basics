var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keyup", dibujarTeclado);
document.addEventListener("mousedown", siMouse);
document.addEventListener("mouseup", noMouse);
document.addEventListener("mousemove", dibujarMouse);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x= 150;
var y= 150;
var estado = 0;

dibujarLinea("red", 149,149,151,151, papel);

function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarMouse(click)
{
  console.log("me movi");
  var colorcito = "blue";
  if (estado == 1)
  {
    dibujarLinea(colorcito, x, y, click.layerX, click.layerY, papel);
  }
  x = click.layerX;
  y = click.layerY;
}

function siMouse(click)
{
  estado = 1;
  x = click.layerX;
  y= click.layerY;
  console.log(click);
}

function noMouse(click)
{
  estado = 0;
  x = click.layerX;
  y= click.layerY;
  console.log(click);
}


function dibujarTeclado(evento)
{
  var colorcito = "blue";
  var movimiento = 10;
  switch(event.keyCode)
  {
      case teclas.UP:
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
      break;

      case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;

      case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;

      case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
      default:
        console.log("whatever")
      break;
  }
  console.log(evento.keyCode);
}
