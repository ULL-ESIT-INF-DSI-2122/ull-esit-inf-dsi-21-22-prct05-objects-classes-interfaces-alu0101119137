# Desarrollo de Sistemas Informáticos
## Práctica 5. Objetos, clases e interfaces  
### Andrea Hernández Martín - alu0101119137
[Enlace a la Github Page](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-alu0101119137/)

## Introducción  
En esta práctica realizaremos 2 ejercicios en Typescript en los cuales aprenderemos a manejar sobre todo objetos, clases e interfaces. Además, utilizaremos TypeDoc para documentar el desarrollo del código implementado, así como las herramientas Mocha y Chai para incorporar desarrollo dirigipo por pruebas (TDD) o por comportamiento (BDD). También se han utilizado las herramientas Instanbul y Coveralls para el cubrimiento del código.  

## Ejercicios  
### Ejercicio 1. Pokedex  
En este ejercicio se nos pide crear una Pokedex que almacena la información de los Pokemons. Además, se nos pide crear una simulación de un combate entre dos pokemon. Para ello, se creará la interfaz `Pokedex` y dos clases, `Pokemon` y `Combat`, las cuales se comentarán a continuación.  

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