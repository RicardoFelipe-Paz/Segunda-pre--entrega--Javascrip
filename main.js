
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

function calcularvoloumen (cuerpo) {

    if (cuerpo == "cubo") { //Cubo

       base = prompt ("Ingrese el valor de base del cubo:\nRecuerde que los valores deben ser expresados en metros");
        return base**3;
    } 
    else if  (cuerpo == "prisma") { //Prisma rectangular

        base = prompt ("Por favor ingrese el valor de base del Prisma: \nRecuerde que los valores deben ser expresados en metros");
        ancho = prompt ("Ahora ingrese el valor de ancho: \n");
        altura = prompt ("Por ultimo ingrese el valor de altura: \n");
        return base*ancho*altura;
    }
    else if (cuerpo == "cilindro"){ //Cilindro

    radio = prompt ("Ingrese el valor del radio de la circunferencia: \nRecuerde que los valores deben ser expresados en metros");
    altura = prompt ("Ahora ingrese la altura del cilindro: \n");        
        return pi*radio**2*altura;
    }
    else if (cuerpo == "esfera"){ //Esfera
        
        radio = prompt ("Ingrese el valor del radio: \nRecuerde que los valores deben ser expresados en metros")
        return 4*tercio*pi*radio**3;
    }
    else if (cuerpo == "cono") { //Cono
        
    altura = prompt ("Ingrese la altura del cono: \nRecuerde que los valores deben ser expresados en metros");
    radio = prompt ("Ingrese el valor del radio de la base del cono: \n")
        return tercio*pi*radio**2*altura;

    } else {
        alert ("Por favor elija un cuerpo de la lista.")
    }
};

do {

    cuerpo = prompt("A continuacion se muestran una lista de figuras para calcular su volumen, por favor elija la de su interes:\n 1- Cubo\n 2 - Prisma \n 3 - Cilindro\n 4 - Esfera\n 5- Cono\n");
    cuerpo = cuerpo.toLowerCase();

    resultado = calcularvoloumen (cuerpo);

    alert ("El volumen calculado es: " + resultado + " m3");


} while(1);