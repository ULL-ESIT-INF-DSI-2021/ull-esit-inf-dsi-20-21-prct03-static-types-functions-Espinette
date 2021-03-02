
function factorial(n: number) {
  let total = 1;
  for (let i: number = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}

function decimalToFactorial(numero: number) {
  let n: number = 0;
  let aux: number = 0;
  let aux2: number = 0;
  let contador: number = 0;
  let final: string = '';
  let cadena: string;
  while (factorial(n) < numero) {
    n++; // Hallar el máximo valor de la base n!
  }
  for (let i: number = n - 1; i >= 0; i--) {
    contador = 0;
    aux = 0;
    while (aux < numero) {
      aux += factorial(i);
      aux2 = aux;
      contador++; // contador para ver cuantas veces se usa ese factorial
      if (aux > numero) { // if porque se hace una iteracion extra
        aux2 = aux - factorial(i); // obtener valor del aux
        contador--;
      }
    }
    numero = numero - aux2; // decremento del numero actual
    cadena = (contador).toFixed(); // pasar valor del contador a cadena
    final = final + cadena; // ir añadiendo la cadena a la notacion final
  }
  return final;
}

function factorialToDecimal(cadena: string) {
  let n: string;
  let aux: number = cadena.length - 1; // base máx posible del decimal a obtener
  let final: number = 0;
  let numero: number = 0;
  for (let i: number = 0; i < cadena.length; i++) {
    n = cadena[i]; // extraer digito a analizar
    numero = parseInt(n, 10); // pasar el digito a entero
    final += (numero * factorial(aux)); // digito por el factorial de base aux
    aux--; // decrementamos la base del factorial
  }
  return final;
}

const numero: number = 719;
const cadena: string = '543210';
const factorizacion = decimalToFactorial(numero);
const decimal: number = factorialToDecimal(cadena);
console.log(`Numero en notacion factorial ${cadena}. Sol = ${decimal}`);
console.log(`Numero en notacion decimal ${numero}. Sol = ${factorizacion}`);
