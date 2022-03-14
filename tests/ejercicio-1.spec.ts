import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Combat} from '../src/ejercicio-1/combat';

describe('Tests de la clase Pokemon', () => {
  const Pikachu = new Pokemon('Pikachu', 10, 0.4, 'electrico', {ataque: 55, defensa: 40, velocidad: 90, hp: 35});
  it('Se crea un pokemon Pikachu', () => {
    expect(new Pokemon('Pikachu', 10, 0.4, 'electrico', {ataque: 55, defensa: 40, velocidad: 90, hp: 35}));
  });
  it('Se obtiene el nombre de picachu', () => {
    expect(Pikachu.nombre).to.be.equal('Pikachu');
  });
  it('Se obtiene el HP de Pikachu value equal 35', () => {
    expect(Pikachu.estadisticas.hp).to.be.equal(35);
  });
  it('Se obtiene el tipo de Pikachu value equal electrico', () => {
    expect(Pikachu.tipo).to.be.equal('electrico');
  });
});


describe('Tests de la clase Combat', () => {
  const Pikachu = new Pokemon('Pikachu', 10, 0.4, 'electrico', {ataque: 55, defensa: 40, velocidad: 90, hp: 35});
  const Bulbasaur = new Pokemon('Bulbasaur', 5, 0.3, 'hierba', {ataque: 49, defensa: 49, velocidad: 45, hp: 45});
  const combat = new Combat(Pikachu, Bulbasaur);
  it('Se crea un combate entre dos pokemon', () => {
    expect(new Combat(Pikachu, Bulbasaur));
  });
});
