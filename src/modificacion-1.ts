
export class Persona {
  /**
   * Constructor de la clase Persona
   * @param nombre nombre de la persona
   * @param apellidos apellidos de la persona
   * @param fecha fecha de nacimiento de la persona
   * @param genero genero de la persona
   * @param dni dni de la persona
   */
  constructor(protected nombre: string, protected apellidos: string, protected fecha: string, protected genero: string, protected dni: string) {

  }

  /**
   * Getter del nombre
   * @returns retorna el nombre de la persona
   */
  getNombre() {
    return this.nombre;
  }

  /**
   * Getter de los apellidos
   * @returns retorna los apellidos de la persona
   */
  getApellidos() {
    return this.apellidos;
  }

  /**
   * Getter de la fecha
   * @returns retorna la fecha de la persona
   */
  getFecha() {
    return this.fecha;
  }

  /**
   * Getter del genero
   * @returns retorna el genero de la persona
   */
  getGenero() {
    return this.genero;
  }

  /**
   * Getter del dni
   * @returns retorna el dni de la persona
   */
  getDni() {
    return this.dni;
  }

  /**
   * Setter del nombre
   * @param text nombre a modificar
   */
  setNombre(text: string) {
    this.nombre = text;
  }

  /**
   * Setter de los apellidos
   * @param text apellidos a modificar
   */
  setApellidos(text: string) {
    this.apellidos = text;
  }

  /**
   * Setter de la fecha
   * @param text fecha a modificar
   */
  setFecha(text: string) {
    this.fecha = text;
  }

  /**
   * Setter del genero
   * @param text genero a modificar
   */
  setGenero(text: string) {
    this.genero = text;
  }

  /**
   * Setter del dni
   * @param text dni a modificar
   */
  setDni(text: string) {
    this.dni = text;
  }
}

export class Estudiante extends Persona {
  /**
   * Constructor de la clase Estudiante que hereda de la clase Persona
   * @param nombre nombre de la persona
   * @param apellidos apellidos de la persona
   * @param fecha fecha de nacimiento de la persona
   * @param genero genero de la persona
   * @param dni dni de la persona
   * @param correo correo del estudiante
   */
  constructor(nombre: string, apellidos: string, fecha: string, genero: string, dni: string, private correo: string) {
    super(nombre, apellidos, fecha, genero, dni);
  }
  /**
   * Getter del correo electronico
   * @returns retorna el correo del estudiante
   */
  getCorreo() {
    return this.correo;
  }
  /**
   * Setter del correo electronico
   * @param text correo a modificar
   */
  setCorreo(text: string) {
    this.correo = text;
  }
}

export class Profesor extends Persona {
  /**
   * Constructor de la clase Profesor que hereda de la clase Persona
   * @param nombre nombre de la persona
   * @param apellidos apellidos de la persona
   * @param fecha fecha de nacimiento de la persona
   * @param genero genero de la persona
   * @param dni dni de la persona
   * @param correo correo del profesor
   */
  constructor(nombre: string, apellidos: string, fecha: string, genero: string, dni: string, private correo: string) {
    super(nombre, apellidos, fecha, genero, dni);
  }
  /**
   * Getter del correo electronico
   * @returns retorna el correo del profesor
   */
  getCorreo() {
    return this.correo;
  }
  /**
   * Setter del correo electronico
   * @param text correo a modificar
   */
  setCorreo(text: string) {
    this.correo = text;
  }
}


export class Asignatura {
  /**
   * Constructor de la clase asignatura
   * @param nombre nombre de la asignatura
   * @param profes array de profesores
   * @param alumnos array de estudiantes
   */
  constructor(public nombre: string, public profes: Profesor[], public alumnos: Estudiante[]) {

  }
  /**
   * Getter de profesores
   * @returns retorna el nombre de todos los profesores
   */
  getProfes() {
    this.profes.forEach((element)=> {
      return element.getNombre();
    });
  }
  /**
   * Getter de alumnos
   * @returns retorna el nombre de todos los estudiantes
   */
  getAlumnos() {
    const arr: string[] = [];
    this.alumnos.forEach((element)=> {
      arr.push(element.getNombre());
    });
    return arr;
  }
}
