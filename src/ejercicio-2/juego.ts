/**
 * Ejercicio 2. Conecta 4
 * @module Juego
 * @author Andrea Hernández Martín
 */

import {Jugador} from "./jugador";
import {Tablero} from "./tablero";

export class Juego {
  constructor(public jugador1: Jugador, public jugador2: Jugador, public tablero: Tablero) {
  }
}
