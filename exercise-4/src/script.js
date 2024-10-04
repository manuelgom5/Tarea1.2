{
    // Escribe un programa que ponga en práctica la siguiente lógica:
    // a. Mostrar el siguiente menú y el usuario deberá elegir una de las opciones:
    // b. En función de la opción que elija el usuario se le pedirán los datos necesarios en cada caso.
    // c. El programa calculará el resultado y lo mostrará en la consola.
    // d. La lógica anterior se repetirá indefinidamente hasta que el usuario pulse la opción 4 para salir que mostrará un mensaje por consola, Fin del ejercicio.
    // e. Si la opción no está entre el rango 1-4 se mostrará un error mediante la función alert () y se volverá a pedir otra opción.
    let interruptor = true

    while (interruptor) {
        console.log("MENU DE OPCIONES.\n1 - Área de triángulo.\n2 - Área de rectángulo.\n3 - Mediante aritmética de dos números.\n4 - Salir.")
        let option = prompt('Introduce una opción (del 1 al 4): ');
        option = parseInt(option);
        switch (option) {
            case 1:
                console.log('Área del triángulo');
                base = prompt('Introduce la base: ');
                height = prompt('Introduce la altura: ');
                console.log('El área del triángulo es de ' + base*height/2 + 'cms.');
                break;
            case 2:
                console.log('Área del rectángulo.');
                base = prompt('Introduce la base: ');
                height = prompt('Introduce la altura: ');
                console.log('El área del rectángulo es de ' + base*height + 'cms.');
                break;
            case 3:
                console.log('Media aritmética de dos números.');
                firstNumber = prompt('Introduce el primer número: ');
                secondNumber = prompt('Introduce el segundo número: ');
                firstNumber = parseInt(firstNumber);
                secondNumber = parseInt(secondNumber);
                mean_numbers = (firstNumber + secondNumber) / 2;
                console.log('La media de ' + firstNumber + ' y ' + secondNumber + ' es igual a ' + mean_numbers);
                break;
            case 4:
                console.log('Terminando programa...');
                interruptor = false;
                break;
            default:
                console.log('Error: La opción introducida es incorrecta, por favor introduce una opción entre 1 y 4.');
        }
    }
}