import 'mocha';
import {expect} from 'chai';
import {Asignatura, Estudiante, Persona, Profesor} from '../src/modificacion-1';


describe('Tests de la clase Persona', () => {
  it('Crear una persona', () => {
    expect(new Persona('Andrea', 'Hernández', '28-04-1999', 'femenino', '11111111Y'));
  });
  it('Getter del nombre value equal Andrea', () => {
    const pers = new Persona('Andrea', 'Hernández', '28-04-1999', 'femenino', '11111111Y');
    expect(pers.getNombre()).to.be.equal('Andrea');
  });
  it('Getter del genero value equal femenino', () => {
    const pers = new Persona('Andrea', 'Hernández', '28-04-1999', 'femenino', '11111111Y');
    expect(pers.getGenero()).to.be.equal('femenino');
  });
  it('Setter del nombre value equal Emma', () => {
    const pers = new Persona('Andrea', 'Hernández', '28-04-1999', 'femenino', '11111111Y');
    expect(pers.setNombre('Emma'));
  });
});


describe('Tests de la clase Estudiantes', () => {
  it('Crear un estudiante', () => {
    expect(new Estudiante('Andrea', 'Hernández', '28-04-1999', 'femenino', '11111111Y', 'alu@ull.edu.es'));
  });
  it('Getter correo estudiante value equal alu@ull.edu.es', () => {
    const estu = new Estudiante('Andrea', 'Hernández', '28-04-1999', 'femenino', '11111111Y', 'alu@ull.edu.es');
    expect(estu.getCorreo()).to.be.equal('alu@ull.edu.es');
  });
  it('Getter nombre estudiante value equal Andrea', () => {
    const estu = new Estudiante('Andrea', 'Hernández', '28-04-1999', 'femenino', '11111111Y', 'alu@ull.edu.es');
    expect(estu.getNombre()).to.be.equal('Andrea');
  });
  it('Setter correo estudiante', () => {
    const estu = new Estudiante('Andrea', 'Hernández', '28-04-1999', 'femenino', '11111111Y', 'alu@ull.edu.es');
    expect(estu.setCorreo('andre@gmail.com'));
  });
});

describe('Tests de la clase Profesores', () => {
  it('Crear un profesor', () => {
    expect(new Profesor('Emma', 'Gonzalez', '28-04-1999', 'femenino', '11111111Y', 'alu@ull.edu.es'));
  });
  it('Getter correo profesor value equal emma@ull.edu.es', () => {
    const estu = new Profesor('Emma', 'Hernández', '28-04-1999', 'femenino', '11111111Y', 'emma@ull.edu.es');
    expect(estu.getCorreo()).to.be.equal('emma@ull.edu.es');
  });
  it('Getter nombre profesor value equal Emma', () => {
    const estu = new Profesor('Emma', 'Hernández', '28-04-1999', 'femenino', '11111111Y', 'alu@ull.edu.es');
    expect(estu.getNombre()).to.be.equal('Emma');
  });
  it('Setter correo estudiante', () => {
    const estu = new Profesor('Andrea', 'Hernández', '28-04-1999', 'femenino', '11111111Y', 'alu@ull.edu.es');
    expect(estu.setCorreo('andre@gmail.com'));
  });
});


describe('Tests de la clase Asignatura', () => {
  it('Crear una asignatura', () => {
    const profe1 = new Profesor('Emma', 'Gonzalez', '28-04-1999', 'femenino', '11111111Y', 'alu@ull.edu.es');
    const profe2 = new Profesor('Cristina', 'Gonzalez', '28-04-1999', 'femenino', '11111111Y', 'alu@ull.edu.es');
    const profes = [profe1, profe2];
    const estu1 = new Estudiante('Emma', 'Gonzalez', '28-04-1999', 'femenino', '11111111Y', 'alu@ull.edu.es');
    const estu2 = new Estudiante('Cristina', 'Gonzalez', '28-04-1999', 'femenino', '11111111Y', 'alu@ull.edu.es');
    const estudiantes = [estu1, estu2];
    expect(new Asignatura('DSI', profes, estudiantes));
  });

  it('getter nombres alumnos', () => {
    const profe1 = new Profesor('Emma', 'Gonzalez', '28-04-1999', 'femenino', '11111111Y', 'alu@ull.edu.es');
    const profe2 = new Profesor('Cristina', 'Gonzalez', '28-04-1999', 'femenino', '11111111Y', 'alu@ull.edu.es');
    const profes = [profe1, profe2];
    const estu1 = new Estudiante('Emma', 'Gonzalez', '28-04-1999', 'femenino', '11111111Y', 'alu@ull.edu.es');
    const estu2 = new Estudiante('Cristina', 'Gonzalez', '28-04-1999', 'femenino', '11111111Y', 'alu@ull.edu.es');
    const estudiantes = [estu1, estu2];
    const asign = new Asignatura('DSI', profes, estudiantes);
    expect(asign.getAlumnos()).to.deep.eq(['Emma', 'Cristina']);
  });
});
