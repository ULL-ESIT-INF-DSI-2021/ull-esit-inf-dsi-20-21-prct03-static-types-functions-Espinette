// Ejercicio 4 - Conversor de estilo
function fromSnakeToCamelCase(cadena) {
    let aux = ``;
    let cadenafinal = ``;
    for (let i = 0; i < cadena.length; i++) {
        aux = cadena.charAt(i);
        if (aux != '_') {
            cadenafinal = cadenafinal + cadena.charAt(i);
        }
        else {
            cadenafinal = cadenafinal + cadena.charAt(i + 1).toUpperCase();
            i = i + 1;
        }
    }
    return cadenafinal;
}
function fromCamelToSnakeCase(cadena) {
    let aux = ``;
    let cadenafinal = ``;
    for (let i = 0; i < cadena.length; i++) {
        aux = cadena.charAt(i);
        if (aux != cadena.charAt(i).toUpperCase()) {
            cadenafinal = cadenafinal + cadena.charAt(i);
        }
        else {
            cadenafinal = cadenafinal + '_' + cadena.charAt(i).toLowerCase();
        }
    }
    return cadenafinal;
}
const SnakeToCame = `the_stealth_warrior`;
const SolSnakeToCame = fromSnakeToCamelCase(SnakeToCame);
console.log(`Cadena ${SnakeToCame} en Snake sería en Camel: ${SolSnakeToCame}`);
console.log();
const CamelToSnake = `theStealthWarrior`;
const SolCamelToSnake = fromCamelToSnakeCase(CamelToSnake);
console.log(`Cadena ${CamelToSnake} en Camel sería en Snake: ${SolCamelToSnake}`);
