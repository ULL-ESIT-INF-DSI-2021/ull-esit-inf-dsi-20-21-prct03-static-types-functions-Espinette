// Ejercicio 5 - Un solo golpe

function chuckNorris(cadena: string) {
  if (cadena == ``) {
    return `Broken!`;
  }
  let cadenanew: string[];
  cadenanew = cadena.split(" ");
  cadenanew = cadenanew.sort();
  cadena = cadenanew.toString();
  cadena = cadena.replace(/,/gi, " ");
  cadena = cadena.replace(/[ae]/gi, "");
  return cadena;
}

const OnePunchA: string = ``;
const SolOnePunchA: string = chuckNorris(OnePunchA);
console.log(`Cadena vacía: ${SolOnePunchA}`);

const OnePunchB: string = `Beard Jeans Hairbrush Knuckleduster Sand`;
const SolOnePunchB: string = chuckNorris(OnePunchB);
console.log(
    `Cadena "Beard Jeans Hairbrush Knuckleduster Sand": ${SolOnePunchB}`);

const OnePunchC: string = `Sock Beard Vest Lady Sage`;
const SolOnePunchC: string = chuckNorris(OnePunchC);
console.log(`Cadena "Sock Beard Vest Lady Sage": ${SolOnePunchC}`);

const OnePunchD: string = `Beard Sack Gun Parachute Face-Kicking-Shoes`;
const SolOnePunchD: string = chuckNorris(OnePunchD);
console.log(
    `Cadena "Beard Sack Gun Parachute Face-Kicking-Shoes": ${SolOnePunchD}`);

const OnePunchE: string = `Snot Snow Soda Tank Beard`;
const SolOnePunchE: string = chuckNorris(OnePunchE);
console.log(`Cadena "Snot Snow Soda Tank Beard": ${SolOnePunchE}`);
