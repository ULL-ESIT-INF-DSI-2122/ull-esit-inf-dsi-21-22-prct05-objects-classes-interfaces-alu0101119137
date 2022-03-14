/**
 * Ejercicio 1. Pokedex
 * @module Pokemon
 * @author Andrea Hernández Martín
 */


type tipoP = "hierba" | "fuego" | "agua" | "electrico";
type estadistBasic = {
  ataque: number;
  defensa: number;
  velocidad: number;
  hp: number;
};

interface Pokedex {
  nombre: string;
  peso: number;
  altura: number;
  tipo: tipoP;
  estadisticas: estadistBasic;
}

export class Pokemon implements Pokedex {
  /**
   * Constructor de la clase Pokemon
   * @param nombre nombre del pokemon
   * @param peso peso del pokemon
   * @param altura altura del pokemon
   * @param tipo tipo del pokemon
   * @param estadisticas estadisticas basicas del pokemon
   */
  constructor(public readonly nombre: string, public readonly peso: number, public readonly altura: number, public tipo: tipoP, public estadisticas: estadistBasic) {
  }
}
