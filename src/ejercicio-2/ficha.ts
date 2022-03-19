/**
 * Ejercicio 2. Conecta 4
 * @module Ficha
 * @author Andrea Hernández Martín
 */

type color = 1 | 2;

export class Ficha {
  /**
   * Clase Ficha que almacena los datos de una ficha a introducir en el tablero
   * @param color Numero de la ficha del jugador, toma el valor 1 para el jugador 1 y el valor 2 para el jugador 2
   * @param posX Posicion en el eje X donde va la ficha
   * @param posY Posicion en el eje Y donde va la ficha
   */
  constructor(public color: color, public posX: number, public posY: number) {
  }
}
