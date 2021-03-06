// Ejercicio 2 - Notación decimal y factorial
function factorial(n) {
    let total = 1;
    for (let i = 1; i <= n; i++) {
        total = total * i;
    }
    return total;
}
function decimalToFactorial(numero) {
    let n = 0;
    let aux = 0;
    let contador = 0;
    let final = '';
    let cadena;
    while (factorial(n) < numero) {
        n++; // Hallar el máximo valor de la base n!
    }
    for (let i = n - 1; i >= 0; i--) {
        contador = 0;
        contador = numero / factorial(i);
        aux = Math.trunc(contador);
        numero = numero % factorial(i); // decremento del numero actual
        cadena = (aux).toFixed(); // pasar valor del contador a cadena
        final = final + cadena; // ir añadiendo la cadena a la notacion final
    }
    return final;
}
function factorialToDecimal(cadena) {
    let n;
    let aux = cadena.length - 1; // base máx posible del decimal a obtener
    let final = 0;
    let numero = 0;
    for (let i = 0; i < cadena.length; i++) {
        n = cadena[i]; // extraer digito a analizar
        numero = parseInt(n, 10); // pasar el digito a entero
        final += (numero * factorial(aux)); // digito por el factorial de base aux
        aux--; // decrementamos la base del factorial
    }
    return final;
}
const numero = 719;
const cadena = '543210';
const factorizacion = decimalToFactorial(numero);
const decimal = factorialToDecimal(cadena);
console.log(`Numero en notacion factorial ${cadena}. Sol = ${decimal}`);
console.log(`Numero en notacion decimal ${numero}. Sol = ${factorizacion}`);
const numero1 = 463;
const cadena1 = '341010';
const factorizacion1 = decimalToFactorial(numero1);
const decimal1 = factorialToDecimal(cadena1);
console.log(`Numero en notacion factorial ${cadena1}. Sol = ${decimal1}`);
console.log(`Numero en notacion decimal ${numero1}. Sol = ${factorizacion1}`);
