// Ejercicio 3 - Validador de mensajes
function isValid(cadena) {
    let isValido;
    let aux;
    let aux2;
    let aux3;
    for (let i = 0; i < cadena.length; i++) {
        aux = parseInt(cadena, 10);
        for (let j = 1; j <= aux; j++) {
            aux2 = cadena[i + j];
            aux3 = parseInt(aux2, 10);
            if (aux3 == NaN) {
                isValido = true;
                return isValido;
            }
        }
    }
}
const cadena3 = '3hey5hello2hi';
const sol3 = isValid(cadena3);
console.log(`${sol3}`);
