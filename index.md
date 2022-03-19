# Desarrollo de Sistemas Informáticos
## Práctica 5. Objetos, clases e interfaces  
### Andrea Hernández Martín - alu0101119137
[Enlace a la Github Page](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-alu0101119137/)

## Introducción  
En esta práctica realizaremos 2 ejercicios en Typescript en los cuales aprenderemos a manejar sobre todo objetos, clases e interfaces. Además, utilizaremos TypeDoc para documentar el desarrollo del código implementado, así como las herramientas Mocha y Chai para incorporar desarrollo dirigipo por pruebas (TDD) o por comportamiento (BDD). También se han utilizado las herramientas Instanbul y Coveralls para el cubrimiento del código.  

## Ejercicios  
### Ejercicio 1. Pokedex  
En este ejercicio se nos pide crear una Pokedex que almacena la información de los Pokemons. Además, se nos pide crear una simulación de un combate entre dos pokemon. Para ello, se creó la interfaz `Pokedex` y dos clases, `Pokemon` y `Combat`, las cuales se comentarán a continuación.  

- **Interfaz Pokedex:** se ha creado una interfaz **Pokedex** que nos permite describir la forma del objeto **Pokemon**, a esta interfaz se le han asignado las propiedades de nombre, peso, altura, tipo y estadísticas básicas del Pokemon. Cabe destacar que la variable tipo es un tipo de datos `type tipoP = "hierba" | "fuego" | "agua" | "electrico"` que contiene varios tipos de pokemon y la variable estadísticas básicas es otro tipo de datos `type estadistBasic = {ataque: number; defensa: number velocidad: number; hp: number;}` que almacena los valores correspondientes a ataque, defensa, velocidad y hp de un pokemon.  
**Código:**  
```typescript
interface Pokedex {
  nombre: string;
  peso: number;
  altura: number;
  tipo: tipoP;
  estadisticas: estadistBasic;
}
```

- **Clase Pokemon:** esta clase Pokemon implementa la interfaz *Pokedex* nombrada anteriormente, y lo único que hace es almacenar los datos de cada Pokemon, los cuales son el nombre, el peso, la altura, el tipo de pokemon que es un tipo de dato que almacena todos los tipos que podemos utilizar para el ejercicio y las estadíscas del pokemon que es otro tipo de dato que almacena los valores de ataque, defensa, velocidad y hp de dicho pokemon.  
**Código:**  
```ts
export class Pokemon implements Pokedex {
  constructor(public readonly nombre: string, public readonly peso: number, public readonly altura: number, public tipo: tipoP, public estadisticas: estadistBasic) {
  }
}
```

- **Clase Combat:** esta clase Combat lo que hace es simular un combate entre dos pokemons. Para ello, se le pasan dos pokemons de la clase Pokemon para construir dicha clase. Luego, se crean dos funciones, una llamada *danio* que calcula el daño que le causa un pokemon a otro y otra llamada *start* que simula un combate entre ambos pokemons.  
La función *danio* ya se había realizado para otro ejercicio propuesto con anterioridad, y básicamente lo que hace es calcular según el tipo de pokemon que ataca contra el que defiende, el daño que el primero causa mediante una fórmula en la que se calcula el ataque con la efectividad que tiene el pokemon que ataca sobre el que se defiende. La función devuelve el valor numérico de dicho ataque.  
Por otro lado, la función *start* realiza la simulación del combate y esta función no termina hasta que el daño causado a un pokemon supere los HP de dicho pokemon. Por cada ataque muestra el nombre del pokemon que está atacando, el daño que este causa llamando a la función *danio* y los HP que le quedan al pokemon tras el ataque. Esto se repite hasta que el daño de un pokemon sea superior a sus HP.  
**Código:**
```ts
export class Combat {
  constructor(public pokemon1: Pokemon, public pokemon2: Pokemon) {
  }
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

    console.log('Daño causado: ' + (50 * (pokemon1.estadisticas.ataque / pokemon2.estadisticas.defensa) * efectividad).toFixed(2));
    return 50 * (pokemon1.estadisticas.ataque / pokemon2.estadisticas.defensa) * efectividad;
  }

  start() {
    let danio1: number = 0;
    let danio2: number = 0;
    while (danio1 <= this.pokemon1.estadisticas.hp && danio2 <= this.pokemon2.estadisticas.hp) {
      console.log(`Ataca ${this.pokemon1.nombre}:`);
      danio2 += this.danio(this.pokemon1, this.pokemon2);
      console.log('El valor del HP de ' + (this.pokemon1.nombre) + ' = ' + (this.pokemon1.estadisticas.hp - danio1).toFixed(2));
      console.log('El valor del HP de ' + (this.pokemon2.nombre) + ' = ' + (this.pokemon2.estadisticas.hp - danio2).toFixed(2));

      if (danio2 >= this.pokemon2.estadisticas.hp) {
        break;
      }

      console.log(`Ataca ${this.pokemon2.nombre}:`);
      danio1 += this.danio(this.pokemon2, this.pokemon1);
      console.log('El valor del HP de ' + (this.pokemon1.nombre) + ' = ' + (this.pokemon1.estadisticas.hp - danio1).toFixed(2));
      console.log('El valor del HP de ' + (this.pokemon2.nombre) + ' = ' + (this.pokemon2.estadisticas.hp - danio2).toFixed(2));
    }
  }
}
```

### Ejercicio 2  
Para este ejercicio se nos pide crear una simulación del juego Conecta 4 en el cual hay que colocar fichas en un tablero hasta que coincidan 4 del mismo color. No he sabido realizar el ejercicio, pero voy a comentar la idea que tenía para resolverlo.  

Mi idea era crear 4 clases, Ficha, Juego, Jugador y Tablero, las cuales comentaré a continuación.

- **Clase Ficha:** esta clase lo que almacena es una Ficha que contiene un color, el cual yo realicé como tipo de dato de manera que la ficha lo que contiene es un 1 para las fichas del jugador 1 y un dos para las fichas del jugador 2 y de esta forma simplificar el tablero; también contiene la posición en la que se quiere insertar dicha ficha, es decir una variable con la posición en el eje X y otra con la posición en el eje Y.
- **Clase Tablero:** en esta clase se crea una matriz de 6 filas y 7 columnas que es la encargada de simular el tablero en el que se va a jugar. También es la clase encargada de insertar las fichas en el sitio correspondiente, para ello, creé una función *insertarFichas* que mediante splice se pueden insertar correctamente en el lugar que se quiere.  
- **Clase Jugador:** esta clase no supe realizarla, porque mi idea era que el jugador decidiera donde introducir las fichas y hacerlo por teclado en cada jugada pero no supe realizar esto con typescript. Esta clase almacenaría todas las fichas de un jugador con un array de Fichas y cada vez que el jugador introdujese una en el tablero, esta se eliminaría del array. Además de una variable que cuenta todas las fichas que ha introducido. La información que se obtenía de esta clase se pasaría al tablero.    
- **Clase Juego:** esta clase al no saber realizar la clase Jugador, no supe realizarla tampoco, ya que mi idea en esta clase era pasarle dos jugadores y el tablero y que con una función start el juego comenzara, comprobando aquí si hay algún ganador y en caso de que así fuese, mostrarlo por pantalla, así como mostrar en cada jugada que jugador está jugando y dónde insertó la ficha.  

El código que supe realizar está en el directorio correspondiente al ejercicio 2.

## Documentación TypeDoc  
Para la documentación de los ejercicios utilicé la herramienta TypeDoc que convierte los comentarios en el código fuente de TypeScript en documentación HTML renderizada. A continuación, adjunto el enlace a la página web creada mediante TypeDoc.  
[Enlace al directorio que contiene la documentación de la práctica](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-alu0101119137/tree/main/docs)  
![Imagen de la página principal](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-alu0101119137/main/img/Pagina%20principal.png?token=GHSAT0AAAAAABRWGKFXMK4HREWZRDMIZVIAYR7A7QA)
![Imagen de un ejercicio](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-alu0101119137/main/img/combat%201.png?token=GHSAT0AAAAAABRWGKFXZHVRWQWOIKMMIALMYR7A7CQ)
![Imagen de un ejercicio](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-alu0101119137/main/img/combat%202.png?token=GHSAT0AAAAAABRWGKFWPMMKCSGJXW4IFPXWYR7A7VQ)

## Testing  
Para la realización del testing de los ejercicios utilicé las herramientas Mocha y Chai.  
  
He realizado pruebas sobre todos los ejercicios en los cuales compruebo que los valores pasados por parámetro dan el resultado esperado o al contrario, es decir, se comprueba que no dan el resultado esperado. Para ello he creado un fichero ejercicio-n.spec.ts por cada ejercicio y he añadido algunas pruebas de todas las funciones utilizadas.  

A continuación muestro la salida en la terminal al ejecutar el test.  
```
Tests de la clase Pokemon
    ✔ Se crea un pokemon Pikachu
    ✔ Se obtiene el nombre de picachu
    ✔ Se obtiene el HP de Pikachu value equal 35
    ✔ Se obtiene el tipo de Pikachu value equal electrico

  Tests de la clase Combat
    ✔ Se crea un combate entre dos pokemon
Daño causado: 218.18
    ✔ Se calcula el daño que causa Luxray a Floatzel
Ataca Luxray:
Daño causado: 218.18
El valor del HP de Luxray = 80.00
El valor del HP de Floatzel = -133.18
    ✔ Se simula la pelea entre Luxray y Floatzel

  Tests de la clase Ficha
    ✔ Se crea una ficha del jugador uno en la posicion [1,5]

  Tests de la clase Tablero
    ✔ Se crea un tablero para jugar inicialmente vacío

  Tests de la clase Persona
    ✔ Crear una persona
    ✔ Getter del nombre value equal Andrea
    ✔ Getter del genero value equal femenino
    ✔ Setter del nombre value equal Emma

  Tests de la clase Estudiantes
    ✔ Crear un estudiante
    ✔ Getter correo estudiante value equal alu@ull.edu.es
    ✔ Getter nombre estudiante value equal Andrea
    ✔ Setter correo estudiante

  Tests de la clase Profesores
    ✔ Crear un profesor
    ✔ Getter correo profesor value equal emma@ull.edu.es
    ✔ Getter nombre profesor value equal Emma
    ✔ Setter correo estudiante

  Tests de la clase Asignatura
    ✔ Crear una asignatura
    ✔ getter nombres alumnos
    ✔ getter nombres profesor


  24 passing (22ms)
```

## Conclusiones  
Esta práctica me ha resultado más compleja que la anterior, debido al ejercicio 2 que no supe realizarlo. Pero en cuanto al ejercicio 1 me pareció mucho más sencillo de realizar e interesante debido a la temática de este. Además, en cuanto a la hora de implementar este ejercicio en el guión estaba más detallada la forma de hacerlo, por lo que resultó bastante más fácil. En cuanto a la parte de documentación me ha parecido muy interesante, ya que documenta el código en una página web y me parece super útil. Y a la hora de realizar el testing no he tenido ningún inconveniente debido a que lo he utilizado en las prácticas anteriores. También he añadido la herramienta instanbul y coveralls, las cuales no conocía anteriormente, pero me han parecido bastante interesantes y útiles, no he tenido problemas al utilizarlas gracias al vídeo tutorial que se nos proporcionó.

## Bibliografía  
- [Guión de la práctica](https://ull-esit-inf-dsi-2122.github.io/prct05-objects-classes-interfaces/)
- [Documentación TypeDoc](https://typedoc.org/)
- [Documentación Mocha](https://mochajs.org/)
- [Documentación Chai](https://www.chaijs.com/)
- [Documentación Instanbul](https://istanbul.js.org/)
- [Documentación Coveralls](https://coveralls.io/)
- [Apuntes de clase sobre objetos, clases e interfaces](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-objects-classes-interfaces.html)