var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keyup", moverCerdo);

var iniX = 225;
var iniY = 225;
var movimiento = 10;

var teclas = {
    LEFT : 37,
    UP : 38,
    RIGHT : 39,
    DOWN :40
};

xVacas = new Array();
yVacas = new Array();

xPollos = new Array();
yPollos = new Array();

var fondo = {
    url: "imagenes/tile.png",
    cargaOk: false
};

var vaca = {
    url: "imagenes/vaca.png",
    cargaOk: false
};

var pollo = {
    url: "imagenes/pollo.png",
    cargaOk: false
};

var cerdo = {
    url: "imagenes/cerdo.png",
    cargaOk: false
};

numeroAleatorioVacasPollos();

fondo.imagen = new Image(); //crea el objeto imagen
fondo.imagen.src = fondo.url; //Carga la imagen de fondo
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image(); //crea el objeto imagen
vaca.imagen.src = vaca.url; //Carga la imagen de vaca
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image(); //crea el objeto imagen
pollo.imagen.src = pollo.url; //Carga la imagen de pollo
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image(); //crea el objeto imagen
cerdo.imagen.src = cerdo.url; //Carga la imagen de cerdo
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar();
}

function cargarVaca()
{
    vaca.cargaOk = true;
    dibujar();
}

function cargarPollo()
{
    pollo.cargaOk = true;
    dibujar();
}

function cargarCerdo()
{
    cerdo.cargaOk = true;
    dibujar();
}

function numeroAleatorioVacasPollos()
{
    var x;
    var y;

    var cantidadVacas = aleatorio(5,15);
    console.log("Vacas: " + cantidadVacas);

    var cantidadPollos = aleatorio(5,15);
    console.log("Pollos: " + cantidadPollos);

    for(i=0; i<cantidadPollos; i++)
    {
        x = aleatorio(0, 6);
        y = aleatorio(0, 6);
        x = x*60;
        y = y*60;
        
        xPollos[i] = x;
        yPollos[i] = y;
    }

    for(i=0; i<cantidadVacas; i++)
    {
        x = aleatorio(0, 6);
        y = aleatorio(0, 6);
        x = x*60;
        y = y*60;

        xVacas[i] = x;
        yVacas[i] = y;
    }
}

function dibujar()
{
    if(fondo.cargaOk == true){
        papel.drawImage(fondo.imagen, 0, 0); //dibuja la imagen en la coordenada (0,0)
        if(vaca.cargaOk == true){
            
            for(i=0; i<xVacas.length; i++)
            {
                papel.drawImage(vaca.imagen, xVacas[i], yVacas[i]);
            }
            
        }
        if(pollo.cargaOk == true){

            for(i=0; i<xPollos.length; i++)
            {
                papel.drawImage(pollo.imagen, xPollos[i], yPollos[i]);
            }
            
        }
        if(cerdo.cargaOk == true){
            papel.drawImage(cerdo.imagen, iniX, iniY);
        }
    }
}

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor((max-min+1) * Math.random()) + min;
    return resultado;
}

function moverCerdo(evento)
{
    switch (evento.keyCode){
        case teclas.DOWN:
            papel.drawImage(cerdo.imagen, iniX, iniY + movimiento);
            iniY += movimiento;
            dibujar()
            break;
        case teclas.RIGHT:
            papel.drawImage(cerdo.imagen, iniX + movimiento, iniY);
            iniX += movimiento;
            dibujar()
            break;
        case teclas.UP:
            papel.drawImage(cerdo.imagen, iniX, iniY - movimiento);
            iniY -= movimiento;
            dibujar()
            break;
        case teclas.LEFT:
            papel.drawImage(cerdo.imagen, iniX - movimiento, iniY);
            iniX -= movimiento;
            dibujar()
            break;
        default:
            1;
    }
}


