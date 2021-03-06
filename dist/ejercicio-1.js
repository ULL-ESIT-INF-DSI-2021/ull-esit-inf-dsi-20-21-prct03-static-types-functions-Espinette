// Año bisiestos
function isLeapYear(year) {
    let isbisiesto;
    if (year % 4 == 0) {
        if (year % 100 != 0) {
            isbisiesto = true;
        }
        else if ((year % 100 == 0) && (year % 400 == 0)) {
            isbisiesto = true;
        }
        else {
            isbisiesto = false;
        }
    }
    return isbisiesto;
}
const year = 1900;
const resultado1 = isLeapYear(year);
console.log(`¿El año ${year} es bisiesto? = ${resultado1}`);
