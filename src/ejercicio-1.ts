// Año bisiestos

function isLeapYear(year: number) {
  let isbisiesto: boolean;
  if (year % 4 == 0) {
    if (year % 100 != 0) {
      isbisiesto = true;
    } else if ((year % 100 == 0) && (year % 400 == 0)) {
      isbisiesto = true;
    } else {
      isbisiesto = false;
    }
  }
  return isbisiesto;
}

const year: number = 1900;
const resultado1: boolean = isLeapYear(year);
console.log(`¿El año ${year} es bisiesto? = ${resultado1}`);
