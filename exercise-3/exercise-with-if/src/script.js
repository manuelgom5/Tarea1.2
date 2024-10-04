{
    // Pedimos la edad con prompt y la almacenamos en una variable.
    let age = prompt('Introduce tu edad: ');
    // La edad se almacenamos como cadena, por lo que debemos convertirla a tipo numérico.
    age = parseInt(age);
    // Si la edad es un dato incorrecto, mostrar un mensaje "Error, debe ser un número"
    // Voy a considera dato incorrecto todo lo que no sea de tipo numérico (aunque sigue estando el problema de que la edad podria ser
    // introducida como número flotante, ya que para JavaScript los números flotantes y enteros son del mismo tipo), edades iguales o
    // menores a 0 y edades superiores a 110 años.
    if (isNaN(age) || age <= 0 || age > 100) {
        console.log("Error, la edad debe ser de tipo numérica y estar comprendida entre 1 y 100.");
    } else {
        // Si la edad es menor de 18 años, se mostrará el mensaje "Eres menor de edad".
        if (age < 18) { 
            console.log("Eres menor de edad.");
        }
        // Si la edad es mayor de 18 y menor o igual de 30 años, se mostrará el 
        // mensaje "Eres muy joven".
        else if (age >= 18 && age <= 30) {
            console.log("Eres muy joven.");
        }
        // Si la edad es mayor de 30 y menor o igual de 60 años, se mostrará el mensaje,
        // "Eres una persona adulta".
        else if (age > 30 && age <= 60) {
            console.log("Eres una persona adulta.");
        }
        // Si la edad es mayor de 60, se mostrará el mensaje "Eres una persona adulta mayor"
        else if (age > 60) {
            console.log("Eres una persona adulta mayor.");
        }
    }
}