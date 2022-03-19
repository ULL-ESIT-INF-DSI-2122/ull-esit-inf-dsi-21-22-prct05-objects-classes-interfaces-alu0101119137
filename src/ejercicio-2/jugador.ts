/**
 * Ejercicio 2. Conecta 4
 * @module Jugador
 * @author Andrea Hernández Martín
 */

import {Ficha} from "./ficha";

export class Jugador {
  /**
   * Constructor de la clase Jugador que almacena todas las fichas de un jugador
   * @param arrFichas Todas las fichas que tiene un jugador
   * @param numFichas Es el número de fichas que ha colocado
   */
  constructor(public arrFichas: Ficha[], public numFichas: number) {

  }
}
