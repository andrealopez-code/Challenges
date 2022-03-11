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
- Reto #5 “Resta de pizzas”
    
Llegaste a una fiesta con `X` cantidad de rebanadas de pizza (indicadas por el usuario), después de
un rato se consumió `Y` cantidad de rebanadas y quedan `Z`.

Fácil ¿cierto?

El reto está en que expreses lo que sucede en una forma comprensible para cualquier persona, imprescindible pensar en tus usuarios.

Entradas: 
1. Pedir al usuario que coloque la cantidad de rebanadas de pizza.
2. Pedir al usuario que coloque la cantidad que se consumió de rebanadas de pizza.
Salidas: 
1. Llevaste a la fiesta una pizza con x cantidad de rebanadas.
2. En la fiesta consumieron y cantidad de rebanadas de pizza.
3. Y te quedaron z cantidad de rebanadas de pizza.
Proceso:
1. Escribe [x] cantidad de rebanadas de pizza.
2. Escribe [y] cantidad de rebanadas de pizza.
3. Escribe [z] cantidad de rebanadas de pizza.
4. Guardar en una variable [x] cantidad de rebanadas de pizza.
5. Guardar en una variable [y] de rebanadas de pizza.
6. Guardar en una variable [z] de rebanadas de pizza.
7. Pasar a [x] rebandas de pizza a número.
8. Pasar a [y] rebandas de pizza a número.
9. Pasar a [z] rebandas de pizza a número.
10. Operar [x] + [y].
11. Guadar el resultado en una variable [z].
12. Dar formato a dos decimales [z].
13. Mostrar al usuario el resultado de [x] + [y] = [z].

*/

function amountPizza() {
    let xPizza, yPizza, zPizza;
    xPizza= prompt("¡Hola! Bienvenido a 'Fiesta en la ciudad', Veo que trajiste una pizza, ¿Qué cantidad de rebanadas de pizza has traido?");
    yPizza= prompt("¿Cómo va la fiesta? Coloca que cantidad de rebanadas de pizza han consumido :)");
    xPizza= parseFloat(xPizza);
    yPizza= parseFloat(yPizza);
    zPizza= (xPizza - yPizza);
    zPizza= zPizza.toFixed(2);
    alert("Se acabo la fiesta :(, ahora miremos cuantas rebanadas de pizza te quedaron. Trajiste " + xPizza + " y comieron " + yPizza + " entonces, te quedaron " + zPizza);
}

/*
Reto #6 “Edad futura y pasada”
Pide al usuario que indique su nombre y su edad. Como mensaje de salida le indicarás que edad tuvo el año pasado y cuantos años tendrá el siguiente año.
Ejemplo:
[nombre] el año pasado tenías X años y el próximo año cumplirás Y años.

Entradas: [nombre del usuario] [edad del usuario].
Salidas: [edad año pasado] [edad próximo año].
Proceso: 
1. Pedir al usuario que escriba su [nombre].
2. Guardar [nombre] en una variable.
3. Pedir al usuario que escriba su [edad].
4. Guadar [edad en una variable].
5. Declarar [lastAge] en una variable.
6. Declarar [nextAge] en una variable.
7. Pasar de string [edad] a número.   
8. Hacer una operación para obtener [lastAge]. 
9. Hacer una operación para obtener [nexttAge].
10. Mostrar en pantalla la edad [lastAge] y [nexttAge].

*/


function getAge() {
    let nameUser, ageUser, lastAge, nextAge;
    nameUser= prompt("Hola tú, por favor escribe tu nombre");
    ageUser= prompt("Si quieres saber cosas *-* escribe tu edad");
    ageUser= parseFloat(ageUser);
    lastAge= (ageUser - 1);
    nextAge= (ageUser + 1);
    //lastAge= --ageUser;
    //nextAge= ++ageUser;
    alert(nameUser + " el año pasado tenías " + lastAge + " y el próximo año cumplirás " + nextAge + " (porque obviamente no te sabes tú edad)");
}

