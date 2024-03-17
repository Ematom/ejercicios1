// ejercicio 1

//const pregunta1 = prompt ("eres bellisimo/a");
//if (pregunta1 === "si") {

//console.log( "ciertamente" );

//}
//else {
 //console.log ( "no te creo" );

//}


// ejercicio 2 Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.


//var pregunta2 = prompt("Cual numero?");
//var pregunta2s = pregunta2%2

//if (pregunta2s == "0") {
   // console.log("es divisible entre 2");
//}
//else
   // console.log("es numero impar");


   //Ejercicio 3 Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

//var pregunta2 = prompt("Cual numero?");
//var pregunta2a = pregunta2%2

//if (pregunta2a == "0") {
   // alert("Numero Par");
//}
//else
   // alert("Numero impar");



   //ejercicio 4 Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

//var pregunta4 = prompt("Introduce tu número de cliente");

//if (pregunta4 == "1000") {
   // alert("Ganaste un premio");
//}
//else
    //alert("sigue participando");


    // ejercicio 5 Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

//var pregunta1 = prompt("Introduce el primer número");
//var pregunta2 = prompt("Introduce el segundo número");

//if (pregunta1 > pregunta2) {
    //console.log("es menor: " + pregunta2)
//}
//else {
  //  console.log("Es menor: " + pregunta1)
//}


// ejercicio 6 Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

//var pregunta1 = prompt("Introduce el primer número");
//var pregunta2 = prompt("Introduce el segundo número");
//var pregunta3 = prompt("Introduce el tercer número");

//if (pregunta1 >= pregunta2 && pregunta1 >= pregunta3) {
    //console.log("es mayor: " + pregunta1)
//}
//else if (pregunta2 >= pregunta1 && pregunta2 >= pregunta3) {
    //console.log("es mayor: " + pregunta2)
//}
//else if (pregunta3 >= pregunta1 && pregunta3 >= pregunta2) {
    //console.log("Es mayor: " + pregunta3)
//}


// ejercicio 7 Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

//var pregunta1 = prompt ("Introduce un día de la semana");
//if (pregunta1 === "lunes") {
   // console.log("iniciando lunes con actitud")
//}
//else if (pregunta1 === "viernes") {
    //console.log("ya llego el beviernes")
//}
//else if (pregunta1 === "sabado") {
    //console.log("yaayy sabadrink")
//}
//else if (pregunta1 === "domingo") {
   //console.log("a descansar que es domingo")
//}
//else console.log("un dia cualquiera")


// ejercicio 8 solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

//var pregunta1 = prompt("Introduzca un numero del 1 al 10");

//if (pregunta1 <= 10 && pregunta1 >= 0) {
    //if (pregunta1 < 6) {
       // console.log("estas reprobado");
    //}
    //else if (pregunta1 >= 6 && pregunta1 <= 8) {
      //  console.log ("Regular");
   // }
    //else if  (pregunta1 == 9) {
    //    console.log ("Bien");
    //}
    //else if  (pregunta1 == 10) {
    //    console.log ("Excelente");
    //}
//}
//else console.log("Numero no esta en el rango");



//ejercicio 9 Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.


//var pregunta9a = prompt("Quieres comprar un helado");
//var helado=50
//var oreo=10;
//var kitkat=15;
//var brownie=20;

//if (pregunta9a == "si") {
  //  var pregunta9b = prompt("quieres toppings con tu helado?");
   //     if (pregunta9b == "si") {
    //        console.log("Los toppings disponibles son: Oreo, KitKat, Brownie");
    //        var pregunta9c = prompt("Cual topping quieres?");
    //            if (pregunta9c == "oreo") {
   //                 console.log("El precio de tu helado es de " + helado + "toping oreo: " + oreo + " total: " + (helado+oreo));
   //             }
   //             else if (pregunta9c == "kitkat") {
   //             }
   //             else if (pregunta9c == "brownie") {
   //                 console.log("El precio de tu helado es de " + helado + "toping brownie: " + brownie + " total: " + (helado+brownie));
   //             }

  //      }
  //      else console.log("el precio de tu helado es de: " + helado);

//}
//else console.log("gracias por no comprar nada");


//ejercicio 10 un conocido portal de educacion de tecnologia esta ofreciendo programas para aprender a desarrollar aplicaciones. escribe un prgrama que le indique a la persona interesada cuanto debera pagar mensualmente de acuerdo a la opcion elegida.

var course = 4999;
var carrera = 3999;
var master = 2999;
var facebook = 0.2;
var google = 0.1;
var jesua = 0.5;

var pregunta1 = prompt ("Cual programa educativo te inscribes? Master, Course, Carrera");
var pregunta2 = prompt ("Cual beca educativo con la que te inscribes? facebook, google, jesua");

if (pregunta1 == "course") {
    if (pregunta2 == "facebook") {
        console.log("Vas a pagar la cantidad de: " +((course-(course*facebook))/2))
    }
    else if (pregunta2 == "google") {
        console.log("Vas a pagar la cantidad de: " +((course-(course*google))/2))
    }
    else if (pregunta2 == "jesua") {
        console.log("Vas a pagar la cantidad de: " +((course-(course*jesua))/2))
    }
}



else if (pregunta1 == "carrera") {
    if (pregunta2 == "facebook") {
        console.log("Vas a pagar la cantidad de: " +((carrera-(carrera*facebook))/6))
    }
    else if (pregunta2 == "google") {
        console.log("Vas a pagar la cantidad de: " +((carrera-(carrera*google))/6))
    }
    else if (pregunta2 == "jesua") {
        console.log("Vas a pagar la cantidad de: " +((carrera-(carrera*jesua))/6))
    }
}


else if (pregunta1 == "master") {
    if (pregunta2 == "facebook") {
        console.log("Vas a pagar la cantidad de: " +((master-(master*facebook))/12))
    }
    else if (pregunta2 == "google") {
        console.log("Vas a pagar la cantidad de: " +((master-(master*google))/12))
    }
    else if (pregunta2 == "jesua") {
        console.log("Vas a pagar la cantidad de: " +((master-(master*jesua))/12))
    }
}

