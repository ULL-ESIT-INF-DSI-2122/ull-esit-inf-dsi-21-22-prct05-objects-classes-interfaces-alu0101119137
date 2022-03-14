/**
 * Ejercicio 1. Pokedex
 * @module Combat
 * @author Andrea Hernández Martín
 */

import {Pokemon} from "./pokemon";

export class Combat {
  /**
   * Constructor de la clase Combat
   * @param pokemon1 Pokemon 1 que va a combatir
   * @param pokemon2 Pokemon 2 que va a combatir
   */
  constructor(public pokemon1: Pokemon, public pokemon2: Pokemon) {
  }

  /**
   * Función que calcula el daño que causa el ataque de un pokemon a otro
   * @param pokemon1 Pokemon que ataca
   * @param pokemon2 Pokemon que se defiende
   * @returns Daño causado por el pokemon 1 al pokemon 2
   */
  danio(pokemon1: Pokemon, pokemon2: Pokemon): number {
    let efectividad: number = 0;
    switch (pokemon1.tipo) {
      case 'fuego':
        if (pokemon2.tipo == "hierba") {
          efectividad = 2;
        } else if (pokemon2.tipo == "electrico") {
          efectividad = 1;
        } else {
          efectividad = 0.5;
        }
        break;

      case "hierba":
        if (pokemon2.tipo == "agua" || pokemon2.tipo == "fuego") {
          efectividad = 2;
        } else {
          efectividad = 0.5;
        }
        break;

      case "agua":
        if (pokemon2.tipo == "fuego") {
          efectividad = 2;
        } else {
          efectividad = 0.5;
        }
        break;

      case "electrico":
        if (pokemon2.tipo == "agua") {
          efectividad = 2;
        } else if (pokemon2.tipo == "electrico") {
          efectividad = 0.5;
        } else {
          efectividad = 1;
        }
        break;
    }

    console.log(`Daño causado: ${50 * (pokemon1.estadisticas.ataque / pokemon2.estadisticas.defensa) * efectividad}`);
    return 50 * (pokemon1.estadisticas.ataque / pokemon2.estadisticas.defensa) * efectividad;
  }

  /**
   * Función que realiza la simulación de un ataque pokemon
   */
  start() {
    let danio1: number = 0;
    let danio2: number = 0;
    while (danio1 <= this.pokemon1.estadisticas.hp && danio2 <= this.pokemon2.estadisticas.hp) {
      console.log(`Ataca ${this.pokemon1.nombre}:`);
      danio2 += this.danio(this.pokemon1, this.pokemon2);
      console.log(`El valor del HP de ${this.pokemon1.nombre} = ${this.pokemon1.estadisticas.hp - danio1}`);
      console.log(`El valor del HP de ${this.pokemon2.nombre} = ${this.pokemon2.estadisticas.hp - danio2}`);

      if (danio2 >= this.pokemon2.estadisticas.hp) {
        break;
      }

      console.log(`Ataca ${this.pokemon2.nombre}:`);
      danio1 += this.danio(this.pokemon2, this.pokemon1);
      console.log(`El valor del HP de ${this.pokemon1.nombre} = ${this.pokemon1.estadisticas.hp - danio1}`);
      console.log(`El valor del HP de ${this.pokemon2.nombre} = ${this.pokemon2.estadisticas.hp - danio2}`);
    }
  }
}

const Luxray = new Pokemon('Luxray', 25, 0.5, 'electrico', {ataque: 120, defensa: 79, velocidad: 70, hp: 80});
const Floatzel = new Pokemon('Floatzel', 15, 0.4, 'agua', {ataque: 105, defensa: 55, velocidad: 115, hp: 85});
const combat = new Combat(Luxray, Floatzel);
combat.start();
