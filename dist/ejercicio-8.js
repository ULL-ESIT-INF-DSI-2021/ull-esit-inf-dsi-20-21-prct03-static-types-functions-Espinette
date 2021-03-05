function ipsInRange(ip1, ip2) {
    const ip1Num = ip1.split(".");
    const ip2Num = ip2.split(".");
    let aux = 1;
    let contadorIp = 0;
    const tam = ip1Num.length;
    for (let i = tam - 1; i >= 0; i--) {
        contadorIp = contadorIp +
            ((parseInt(ip2Num[i]) - parseInt(ip1Num[i])) * aux);
        aux = aux * 256;
    }
    return contadorIp;
}
const ip1 = "10.0.0.10";
const ip2 = "10.0.1.0";
const solRangeIp = ipsInRange(ip1, ip2);
console.log(`Rango  ${ip1} y ${ip2} : ${solRangeIp}`);
