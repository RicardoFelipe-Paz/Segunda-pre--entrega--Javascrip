
const pi = 3.141592;
const tercio = 0.33333;

let repetir = 1;
let base = 0;
let ancho = 0;
let altura = 0;
let radio = 0;
let figura = 0;
let volumen = 0;
let cuerpo = " ";
let resultado = 0;
let evento = 0;
let historial = [];




do {
    cuerpo = prompt("A continuacion se muestran una lista de figuras para calcular su volumen, por favor elija la de su interes:\n 1- Cubo\n 2 - Prisma \n 3 - Cilindro\n 4 - Esfera\n 5- Cono\n 0- Ver Historial");
    cuerpo = cuerpo.toLowerCase();
   
    if (cuerpo ==0) {
        mostrarhistorial();
        
    } else {
       resultado = calcularvoloumen (cuerpo);
       alert ("El volumen calculado es: " + resultado + " m3");
       guardarenhistorial (resultado);
    
    }
       

} while(1);
