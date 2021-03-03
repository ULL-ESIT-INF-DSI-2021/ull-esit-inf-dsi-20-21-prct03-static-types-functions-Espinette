// Ejercicio 3 - Validador de mensajes

function isValid(cadena: string) {
  let cadenanew: string;
  let aux: number;
  let aux2: string;
  let aux3: number;
  cadenanew = cadena;
  for (let i: number = 0; i < cadena.length; i++) {
    aux = parseInt(cadenanew, 10);
    if (aux.toFixed().length > 1) {
      i = i + (aux.toFixed().length - 1);
    }
    if (isNaN(aux) == true) {
      return false;
    }
    for (let j: number = 1; j <= aux; j++) {
      aux2 = cadena.charAt(i + j);
      aux3 = parseInt(aux2, 10);
      if (isNaN(aux3) == false) {
        return false;
      }
    }
    cadenanew = cadenanew.slice(aux + 1);
    i = i + aux;
  }
  return true;
}

const cadenavacia: string = '';
const cadena1cifra: string = '3hey5hello2hi';
const cadena2cifras: string = '3hey10helloworld';
const cadenaerror: string = '3hey4helloworld';

const solcadenavacia = isValid(cadenavacia);
const solcadena1cifra = isValid(cadena1cifra);
const solcadena2cifras = isValid(cadena2cifras);
const solcadenaerror = isValid(cadenaerror);
console.log(`Cadena vacía: ${solcadenavacia}`);
console.log(`Cadena "3hey5hello2hi": ${solcadena1cifra}`);
console.log(`Cadena "3hey10helloworld": ${solcadena2cifras}`);
console.log(`Cadena "3hey4helloworld": ${solcadenaerror}`);

