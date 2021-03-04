// Ejercicio 6 - Conversor ISBN

function isValidISBN(cadena: string) {
  let mult: number = 10;
  let sum: number = 0;
  let aux: string = ``;
  cadena = cadena.replace(/[-]/g, "");
  for (let i: number = 0; i < cadena.length; i++) {
    aux = cadena.charAt(i);
    if ( cadena.charAt(i) == `X`) {
      aux = cadena.charAt(i).replace(`X`, `10`);
    }
    sum = sum + (parseInt(aux, 10) * mult);
    mult = mult - 1;
  }
  if (sum % 11 == 0) {
    return true;
  } else {
    return false;
  }
}

const isbnwithX: string = `359821507X`;
const solisbnwithX: boolean = isValidISBN(isbnwithX);
console.log(`ISBN ${isbnwithX} valido?: ${solisbnwithX}`);

const isbn: string = `3-598-21508-8`;
const solisbn: boolean = isValidISBN(isbn);
console.log(`ISBN ${isbn} valido?: ${solisbn}`);

const isbnerror: string = `3-598-22508-8`;
const solisbnerror: boolean = isValidISBN(isbnerror);
console.log(`ISBN ${isbnerror} valido?: ${solisbnerror}`);
