import 'mocha';
import {expect} from 'chai';
import {Ficha} from '../src/ejercicio-2/ficha';
import {Tablero} from '../src/ejercicio-2/tablero';

describe('Tests de la clase Ficha', () => {
  it('Se crea una ficha del jugador uno en la posicion [1,5]', () => {
    expect(new Ficha(1, 1, 5));
  });
});

describe('Tests de la clase Tablero', () => {
  const mat: number[][] = [];
  // const tab: Tablero = new Tablero(mat);
  it('Se crea un tablero para jugar inicialmente vacío', () => {
    expect(new Tablero(mat));
  });
});
