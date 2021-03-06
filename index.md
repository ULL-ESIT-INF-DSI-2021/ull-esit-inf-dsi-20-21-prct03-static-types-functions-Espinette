# INFORME PRACTICA 3
## Tipos de datos estáticos y funciones
### ALBERTO RIOS DE LA ROSA
### alu0101235929@ull.edu.es

### INTRODUCCIÓN

Esta práctica tiene como función principal empezar a realizar ejercicios de programación para empezar a realizar codigo en TypeScript, principalemte en los disintos tipos de datos estáticos como las funciones. A continuación mostraremos la solución a cada uno de los diez ejercicios propuestos con una breve explicación de cada uno y una captura de pantalla con un ejemplo de salida del ejercicio. Si desea leer los enunciados de cada ejercicio los podrás encontrar pinchando [aqui](https://ull-esit-inf-dsi-2021.github.io/prct03-types-functions/).

### ELABORACIÓN DE LOS EJERCICIOS

#### Ejercicio-1. Años bisiestos

*Código resuelto* = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-Espinette/blob/master/src/ejercicio-1.ts)

***Resumen enunciado*** 

Crear una funcion `isLeapYear` que devuelva true o false en el caso de que sea o no bisiesto el año. Para que una año sea bisiesto debe cumplir las siguientes condiciones:

  - Cada año que es divisible por 4.
  - Excepto cada año que es divisible por 100.
  - Al menos que el año también sea divisible por 400.
 
***Captura y explicación de la función resuelta***
 
 ![Ejercicio1](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-Espinette/blob/gh-pages/Imagenes/Ejercicio1.JPG)
 
Para lograr el objetivo de la funcion, que recibe como parametro el año a analizar y como salida si es true o false en funcion de si es bisiesto. Creamos una condicion `if` para ver si el año es divisible por 4, de no ser así nos retorna false, en el caso de que sea divisible tambien debemos comprobar las otras dos condiciones, la primera es que no sea divible por 100 y la otra es que si es divisible por 100 lo sea por 400 tambien, en ambos casos retornando true, si no es cierta ninguna condicion devuelve que es falso y por lo tanto no es bisiesto.

#### Ejercicio-2. Notación decimal y factorial

*Código resuelto* = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-Espinette/blob/master/src/ejercicio-2.ts)

***Resumen enunciado*** 

Crear dos funciones, `decimalToFactorial` y `factorialToDecimal`. La primera recibirá un numero entero y devolverá una cadena de texto con la representación factorial del número y la segunda función hará justo lo contrario, recibirá una cadena de texto en notación factorial y devolverá el número entero que representa. Un ejemplo de representación sería:

El número 463 codificado en notación factorial sería 341010 ya que:
  - 463 = 3 x 5! + 4 x 4! + 1 x 3! + 0 x 2! + 1 x 1! + 0 x 0!

***Captura y explicación de la función resuelta***

#### Ejercicio-3. Validador de mensajes

*Código resuelto* = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-Espinette/blob/master/src/ejercicio-3.ts)

***Resumen enunciado*** 

Crear una funcion isValid que recibira una cadena formada por numeors y letras y devuelva true si por cada numero que se encuentre tenga esa cantidad de letras de forma consecutiva y devuelve false en caso de no cumplirse. Un ejemplo de cadena válida sería:

  - `3hey5hello2hi` se debería dividir en `3, hey, 5, hello, 2, hi`.
 
***Captura y explicación de la función resuelta***

#### Ejercicio-4. Conversor de estilo

*Código resuelto* = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-Espinette/blob/master/src/ejercicio-4.ts)

***Resumen enunciado*** 

***Captura y explicación de la función resuelta***

#### Ejercicio-5. Un solo golpe

*Código resuelto* = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-Espinette/blob/master/src/ejercicio-5.ts)

***Resumen enunciado*** 

***Captura y explicación de la función resuelta***

#### Ejercicio-6. Conversor ISBN

*Código resuelto* = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-Espinette/blob/master/src/ejercicio-6.ts)

***Resumen enunciado*** 

***Captura y explicación de la función resuelta***

#### Ejercicio-7. El siguiente número

*Código resuelto* = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-Espinette/blob/master/src/ejercicio-7.ts)

***Resumen enunciado*** 

***Captura y explicación de la función resuelta***

#### Ejercicio-8. Contando IPs

*Código resuelto* = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-Espinette/blob/master/src/ejercicio-8.ts)

***Resumen enunciado*** 

***Captura y explicación de la función resuelta***

#### Ejercicio-9. Entrenador Pokemon

*Código resuelto* = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-Espinette/blob/master/src/ejercicio-9.ts)

***Resumen enunciado*** 

***Captura y explicación de la función resuelta***

#### Ejercicio-10. Validador de nombre usuario

*Código resuelto* = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-Espinette/blob/master/src/ejercicio-10.ts)

***Resumen enunciado*** 

***Captura y explicación de la función resuelta***

## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-Espinette/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

