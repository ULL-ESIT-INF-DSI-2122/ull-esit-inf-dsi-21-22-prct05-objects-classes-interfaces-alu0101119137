# Desarrollo de Sistemas Informáticos
## Práctica 5. Objetos, clases e interfaces  
### Andrea Hernández Martín - alu0101119137
[Enlace a la Github Page](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-alu0101119137/)

## Introducción  
En esta práctica realizaremos 2 ejercicios en Typescript en los cuales aprenderemos a manejar sobre todo objetos, clases e interfaces. Además, utilizaremos TypeDoc para documentar el desarrollo del código implementado, así como las herramientas Mocha y Chai para incorporar desarrollo dirigipo por pruebas (TDD) o por comportamiento (BDD).  

## Ejercicios  
### Ejercicio 1. Pokedex  
En este ejercicio se nos pide crear una Pokedex que almacena la información de los Pokemons. Además, se nos pide crear una simulación de un combate entre dos pokemon. Para ello, se creará la interfaz `Pokedex` y dos clases, `Pokemon` y `Combat`, las cuales se comentarán a continuación.  

- **Interfaz Pokedex**: se ha creado una interfaz **Pokedex** que nos permite describir la forma del objeto **Pokemon**, a esta interfaz se le han asignado las propiedades de nombre, peso, altura, tipo y estadísticas básicas del Pokemon. Cabe destacar que la variable tipo es un tipo de datos `type tipoP = "hierba" | "fuego" | "agua" | "electrico"` que contiene varios tipos de pokemon y la variable estadísticas básicas es otro tipo de datos `type estadistBasic = {ataque: number; defensa: number velocidad: number; hp: number;}` que almacena los valores correspondientes a ataque, defensa, velocidad y hp de un pokemon.  
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