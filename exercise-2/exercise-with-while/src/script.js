{
    // Crea un script que muestre los números impares que no sean múltiplo de 3 ni de 7
    // que se encuentren entre el 100 al 1, usando el bucle while.
    let number = 1
    while (number <= 100) {
        if (number % 2 != 0 && number % 3 != 0 && number % 7 != 0) {
            console.log(number);
        }
        number++;
    }
}
