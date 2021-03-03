// Ejercicio 5 - Un solo golpe
function chuckNorris(cadena) {
    if (cadena == ``) {
        return `Broken!`;
    }
    let cadenanew;
    cadenanew = cadena.split(" ");
    cadenanew = cadenanew.sort();
    cadena = cadenanew.toString();
    cadena = cadena.replace(/,/gi, " ");
    cadena = cadena.replace(/[ae]/gi, "");
    return cadena;
}
const OnePunchA = ``;
const SolOnePunchA = chuckNorris(OnePunchA);
console.log(`Cadena vacía: ${SolOnePunchA}`);
const OnePunchB = `Beard Jeans Hairbrush Knuckleduster Sand`;
const SolOnePunchB = chuckNorris(OnePunchB);
console.log(`Cadena "Beard Jeans Hairbrush Knuckleduster Sand": ${SolOnePunchB}`);
const OnePunchC = `Sock Beard Vest Lady Sage`;
const SolOnePunchC = chuckNorris(OnePunchC);
console.log(`Cadena "Sock Beard Vest Lady Sage": ${SolOnePunchC}`);
const OnePunchD = `Beard Sack Gun Parachute Face-Kicking-Shoes`;
const SolOnePunchD = chuckNorris(OnePunchD);
console.log(`Cadena "Beard Sack Gun Parachute Face-Kicking-Shoes": ${SolOnePunchD}`);
const OnePunchE = `Snot Snow Soda Tank Beard`;
const SolOnePunchE = chuckNorris(OnePunchE);
console.log(`Cadena "Snot Snow Soda Tank Beard": ${SolOnePunchE}`);
