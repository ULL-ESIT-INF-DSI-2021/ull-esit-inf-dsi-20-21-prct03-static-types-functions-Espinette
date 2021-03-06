// Ejercicio 8 - Contando IPs

function ipsInRange(ip1: string, ip2: string) {
  const ip1Num = ip1.split(".");
  const ip2Num = ip2.split(".");
  let aux: number = 1;
  let contadorIp: number = 0;
  const tam: number = ip1Num.length;
  for (let i: number = tam-1; i >= 0; i--) {
    contadorIp = contadorIp +
       ((parseInt(ip2Num[i]) - parseInt(ip1Num[i])) * aux);
    aux = aux * 256;
  }
  return contadorIp;
}

const ip1: string = "10.0.0.0";
const ip2: string = "10.0.0.50";
const solRangeIp = ipsInRange(ip1, ip2);
console.log(`Rango  ${ip1} y ${ip2} : ${solRangeIp}`);

const ip1a: string = "10.0.0.0";
const ip2a: string = "10.0.1.0";
const solRangeIpa = ipsInRange(ip1a, ip2a);
console.log(`Rango  ${ip1a} y ${ip2a} : ${solRangeIpa}`);

const ip1b: string = "10.0.0.10";
const ip2b: string = "10.0.1.0";
const solRangeIpb = ipsInRange(ip1b, ip2b);
console.log(`Rango  ${ip1b} y ${ip2b} : ${solRangeIpb}`);

const ip1c: string = "10.0.0.10";
const ip2c: string = "10.0.2.30";
const solRangeIpc = ipsInRange(ip1c, ip2c);
console.log(`Rango  ${ip1c} y ${ip2c} : ${solRangeIpc}`);

