/* - Reto #1 “Hola Mundo”
    
    Pedirás al usuario que digite un nombre y mostrarás en pantalla lo siguiente: Hola, [nombre] 

 Entradas: Nombre de la persona.
 Salida: Hola, [nombre]
 Proceso:
 1. Solicitarle al usuario el nombre. (prompt)
 2. Guardarla en una variable. 
 3. Mostrar el dato que digitó al usuario. (alert)

    */

function greeting() {
  let nameUser;
  nameUser = prompt("Hola, escribe tú nombre");
  alert("Hola, " + nameUser);
}

/*
- Reto #2 “Hola… nombre y apellido”
    
Ahora que sabemos incluir nombres, podemos solicitar un segundo dato.
Intentemos con un apellido para tener algo así: “Hola, [nombre] [apellido]”

Entradas: Nombre y apellido de la persona.
 Salida: Hola, [nombre] [apellido]
 Proceso:
 1. Solicitarle al usuario el nombre. (prompt)
 2. Solicitarle al usuario el apellido. (prompt)
 3. Guardarla en una variable el nombre. 
 4. Guardarla en una variable el apellido.
 5. Mostrar el dato que digitó al usuario. [nombre] [apellido] (alert)
 */

 function greeting2() {
     let nameUser;
     let lastNameUser;
     nameUser= prompt("Hola, escribe aquí tu nombre");
     lastNameUser= prompt("Otra vez tú? Escribe tu apellido");
     alert("Hola, " + nameUser + " " + lastNameUser);
 }

 /*
 - Reto #3 “Suma de enteros”
    
 Pedir al usuario que ingrese 2 números y mostrar en pantalla el resultado. Debes utilizar números con punto decimal y especificar el número de decimales después del punto.

Ejemplo: 2.5633 + 5.6883 = 8.25

Entradas: Pedir al usuario que ingrese 2 números.
Salidas: [número1] + [número2] = [número3]
Proceso:
1. Escribe un número1.
2. Escribe un número2.
3. Guardar en una variable número1.
4. Guardar en una variable número2.
5. Convertir numero1 a número.
6. Convertir numero2 a número.
7. Operar [número1] + [número2].
8. Dar formato a solo 2 decimales.
9. Guadrar el resultado anterior en una variable [número3].
10. Mostrar al usuario el resultado de [número1] + [número2]= [número3].

*/

function operationNumber() {
    let number1;
    let number2;
    let number3;
    number1= prompt("Hola, coloca un número");
    number2= prompt("¿Quieres más? Coloca otro número");
    number1= parseFloat(number1);
    number2= parseFloat(number2);
    number3= (number1 + number2);
    number3= number3.toFixed(2);
    alert(" El resultado de sumar " + number1 + " y " + number2 + " es = a " + number3);
    
}

/*
- Reto #4 “Suma y multiplicación”
    
El usuario ingresará 3 números, sumarás los 2 primeros y el resultado será multiplicado por el tercero.
Añade las consideraciones del punto decimal del reto anterior.

Ejemplo:
Datos de entrada:2, 3, 4
Resultado: 20

Entradas: Pedir al usuario que coloque 3 números.
Salidas: [número1] + [número2] * [número3] = [número4]
Proceso:
1. Escribe número1.
2. Escribe número2.
3. Escribe número3.
4. Guardar en una variable [número1].
5. Guardar en una variable [número2].
6. Guardar en una variable [número3].
7. Pasar a [número1] a número.
8. Pasar a [número2] a número.
9. Pasar a [número3] a número.
10. Operar [número1] + [número2] * [número3].
11. Guardar el resultado en una variable [número4].
12. Dar formato para 2 decimales [número4].
13. Mostrar al usuario el resultado de [número1] + [número2] * [número3]= [número4].

*/

function operationNumber2() {
    let number1, number2, number3, number4;
    number1= prompt("Hola, Pon un número :)");
    number2= prompt("Coloca otro número para sumarlo con el anterior");
    number3= prompt("Y aquí coloca otro número para que se multiplique lo anterior");
    number1= parseFloat(number1);
    number2= parseFloat(number2);
    number3= parseFloat(number3);    
    number4= (number1 + number2) * number3;
    number4= number4.toFixed(2);
    alert("El resutlado de " + number1 + " + " + number2 + " * " + number3 + " es = a " + number4);
}

/*


