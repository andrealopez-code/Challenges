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

