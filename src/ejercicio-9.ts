// Ejercicio 9 - Entrenador Pokemon

function dañoPokemon(tipoPok1: string, tipoPok2: string,
    capAtaq1: number, capAtaq2: number) {
  let efectividad: number = 0;
  let daño: number = 0;
  switch (tipoPok1) {
    case `fuego`:
      if (tipoPok2 = `hierba`) {
        efectividad = 2;
      } else if (tipoPok2 = `electrico`) {
        efectividad = 1;
      } else {
        efectividad = 0.5;
      }
      break;
    case `hierba`:
      if (tipoPok2 = `agua`) {
        efectividad = 2;
      } else if (tipoPok2 = `electrico`) {
        efectividad = 1;
      } else {
        efectividad = 0.5;
      }
      break;
    case `electrico`:
      if (tipoPok2 = `agua`) {
        efectividad = 2;
      } else if ((tipoPok2 = `fuego`) || (tipoPok2 = `hierba`)) {
        efectividad = 1;
      } else {
        efectividad = 0.5;
      }
      break;
    case `agua`:
      if (tipoPok2 = `fuego`) {
        efectividad = 2;
      } else {
        efectividad = 0.5;
      }
      break;
  }
  daño = 50 * (capAtaq1 / capAtaq2) * efectividad;
  return daño;
}


console.log(
    `Daño pokemon fuego(ataque 1000) vs hierba(defensa 200):
${dañoPokemon("fuego", "hierba", 1000, 200)}`);
console.log(
    `Daño pokemon agua(ataque 320) vs electrico(defensa 640):
${dañoPokemon("agua", "electrico", 320, 640)}`);
