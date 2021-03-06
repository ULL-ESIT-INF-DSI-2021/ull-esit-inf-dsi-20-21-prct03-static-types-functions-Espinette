// Ejercicio 10 - Validador de nombre usuario
function isValidUsername(nombreUser) {
    const tam = nombreUser.length;
    if ((tam >= 4) && (tam <= 30)) {
        if ((nombreUser[0] != "_") && (nombreUser[tam - 1] != "_")) {
            if ((/[a-z]/.test(nombreUser)) && (/[A-Z]/.test(nombreUser)) &&
                (/[$_-]/.test(nombreUser)) && (/\d/.test(nombreUser))) {
                if ((!/[a-z][a-z][a-z]/.test(nombreUser)) &&
                    (!/[A-Z][A-Z][A-Z]/.test(nombreUser)) &&
                    (!/[$_-][$_-][$_-]/.test(nombreUser)) &&
                    (!/\d\d\d/.test(nombreUser))) {
                    return true;
                }
            }
        }
    }
    return false;
}
console.log(`Usuario Alu01$bn valido? : ${isValidUsername("Alu01$bn")}`);
console.log(`Usuario u__hello$122__ valido? : ${isValidUsername("u__hello$122__")}`);
