// Ejercicio 3 - Validador de mensajes

function isValid(cadena: string) {
  let isValido: boolean;
  let aux: number;
  let aux2: string;
  let aux3: number;
  for (let i: number = 0; i < cadena.length; i++) {
    aux = parseInt(cadena,10);
    for (let j: number = 1; j <= aux; j++) {
      aux2 = cadena[i+j];
      aux3 = parseInt(aux2, 10);
      if ( aux3 == NaN) {
        isValido = true;
        return isValido;
      }
    }
  }
}

const cadena3: string = '3hey5hello2hi';
const sol3 = isValid(cadena3);
console.log(`${sol3}`);
