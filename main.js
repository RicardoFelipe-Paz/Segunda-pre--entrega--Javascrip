
figura = parseInt (prompt("A continuacion se muestran una lista de figuras para calcular su volumen, por favor elija la de su interes:\n 1- Cubo\n 2 - Prisma Rectangular\n 3 - Cilindro\n 4 - Esfera\n 5- Cono\n"));

function calcularvoloumen (cuerpo) {

    if (cuerpo == 1) {
        base = prompt ("Ingrese el valor de base del cubo:\nRecuerde que los valores deben ser expresados en metros");
        return base**3;
    } 
    else if  (cuerpo == 2) {

        base = prompt ("Por favor ingrese el valor de base del Prisma: \nRecuerde que los valores deben ser expresados en metros");
        ancho = prompt ("Ahora ingrese el valor de ancho: \n");
        altura = prompt ("Por ultimo ingrese el valor de altura: \n");
        volumen = base*ancho*altura;

    }
    else if (cuerpo == 3){
        radio = prompt ("Ingrese el valor del radio de la circunferencia: \nRecuerde que los valores deben ser expresados en metros");
        altura = prompt ("Ahora ingrese la altura del cilindro: \n");
        volumen = pi*radio**2*altura;

    }
    else if (cuerpo == 4){
        radio = prompt ("Ingrese el valor del radio: \nRecuerde que los valores deben ser expresados en metros")
        volumen = 4*tercio*pi*radio**3;
    

    }
    else if (cuerpo == 5) {
        altura = prompt ("Ingrese la altura del cilindro: \nRecuerde que los valores deben ser expresados en metros");
        radio = prompt ("Ingrese el valor del radio de la base del cono: \n")
        volumen = tercio*pi*radio**2*altura;
    

    } else {

    }


};