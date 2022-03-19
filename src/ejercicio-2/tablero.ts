/**
 * Ejercicio 2. Conecta 4
 * @module Tablero
 * @author Andrea Hernández Martín
 */

// import {assert} from "chai";
import {Ficha} from "./ficha";

export class Tablero {
  /**
   * Constructor de la clase matriz que la inicializa vacía
   * @param matriz Matriz que contiene un tablero de 6 x 7
   */
  constructor(public matriz: number[][]) {
    let arr: number[] = [];
    for (let i = 0; i < 6; i++) {
      arr = [];
      for (let j = 0; j < 7; j++) {
        arr.push(0);
      }
      this.matriz[i] = arr;
    }
  }

  /**
   * Método que inserta la ficha en el tablero
   * @param ficha Ficha que se quiere insertar en el tablero
   */
  insertarFicha(ficha: Ficha) {
    // assert(ficha.posX < 7 && ficha.posY < 8, "Error, el tablero es de tamaño 6 x 7");
    const arr: number[] = this.matriz[ficha.posX];
    if (arr[ficha.posY] == 0) {
      arr.splice(ficha.posY, 0, ficha.color);
      this.matriz[ficha.posX] = arr;
    } else {
      console.log(`La posición donde se quiere insertar está ocupada. Inserte en otro lugar.`);
    }
  }
}


const mat: number[][] = [];
const tab: Tablero = new Tablero(mat);
const ficha: Ficha = new Ficha(1, 1, 1);
const ficha2: Ficha = new Ficha(2, 2, 1);
tab.insertarFicha(ficha);
tab.insertarFicha(ficha2);
console.log(tab);

