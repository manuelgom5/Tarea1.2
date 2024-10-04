{
    // Pedimos la edad con prompt y la almacenamos en una variable.
    let age = prompt('Introduce tu edad: ')
    // Prompt convierte el valor recibido a cadena, por lo que debemos pasarlo a tipo numérico.
    age = parseInt(age);
    switch (true) {
        // Si la edad es un dato incorrecto, mostrar un mensaje "Error, debe ser un número"
        case (isNaN(age) || age <= 0 || age > 100):
            console.log('Error: La edad debe ser un número y estar comprendido entre 1 y 100.');
            break;
        // Si la edad es menor de 18 años, se mostrará el mensaje "Eres menor de edad".
        case (age < 18):
            console.log('Eres menor de edad.');
            break;
        // Si la edad es mayor de 18 y menor o igual de 30 años, se mostrará el 
        // mensaje "Eres muy joven".
        case (age >= 18 && age <= 30):
            console.log('Eres muy joven.');
            break;
        // Si la edad es mayor de 30 y menor o igual de 60 años, se mostrará el mensaje,
        // "Eres una persona adulta".
        case (age > 30 && age <= 60):
            console.log('Eres una persona adulta.');
            break;
        // Si la edad es mayor de 60, se mostrará el mensaje "Eres una persona adulta mayor"
        default:
            console.log('Eres una persona adulta mayor.');
    }
}