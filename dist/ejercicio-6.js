function isValidISBN(cadena) {
    let mult = 10;
    let sum = 0;
    let aux = ``;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena.charAt(i) == `-`) {
            i = i + 1;
        }
        aux = cadena.charAt(i);
        if (cadena.charAt(i) == `X`) {
            aux = cadena.charAt(i).replace(`X`, `10`);
        }
        sum = sum + (parseInt(aux, 10) * mult);
        mult = mult - 1;
    }
    if (sum % 11 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const isbnwithX = `359821507X`;
const solisbnwithX = isValidISBN(isbnwithX);
console.log(`ISBN 359821507X valido?: ${solisbnwithX}`);
const isbn = `3-598-21508-8`;
const solisbn = isValidISBN(isbn);
console.log(`ISBN 3-598-21508-8 valido?: ${solisbn}`);
const isbnerror = `3-598-22508-8`;
const solisbnerror = isValidISBN(isbnerror);
console.log(`ISBN 3-598-22508-8 valido?: ${solisbnerror}`);
