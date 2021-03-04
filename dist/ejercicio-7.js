// Ejercicio 7 - El siguiente número
function nextNumber(numero) {
    let numString = numero.toFixed();
    let aux = "";
    const tam = numString.length;
    for (let i = tam - 1; i > -1; i--) {
        for (let j = 0; j < tam; j++) {
            if (i - j > 0) {
                if (parseInt(numString.charAt(i - j)) >
                    parseInt(numString.charAt(i - j - 1))) {
                    aux = numString.charAt(i - j);
                    numString = numString.substr(0, i - j - 1) + aux +
                        numString.charAt(i - j - 1) + numString.substr(i - j + 1, tam);
                    return parseInt(numString);
                }
                else {
                    aux = numString.charAt(i - j);
                    numString = numString.substr(0, i - j - 1) + aux +
                        numString.charAt(i - j - 1) + numString.substr(i - j + 1, tam);
                }
            }
        }
        numString = numero.toFixed();
    }
    return -1;
}
console.log(`Siguiente numero a 10500: ${nextNumber(10500)}`);
console.log(`Siguiente numero a 513: ${nextNumber(513)}`);
console.log(`Siguiente numero a 2017: ${nextNumber(2017)}`);
console.log(`Siguiente numero a 9: ${nextNumber(9)}`);
console.log(`Siguiente numero a 111: ${nextNumber(111)}`);
console.log(`Siguiente numero a 531: ${nextNumber(531)}`);
