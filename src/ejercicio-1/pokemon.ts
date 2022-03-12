interface Pokedex {
  nombre: string;
  peso: number;
  tipo: tipo;
  estadistBasicas: estadistBasicas;
}

type tipo = "fire" | "water" | "grass" | "electric";

type estadistBasicas = {
  ataque: number,
  defensa: number,
  velocidad: number,
  hp: number
}

export class Pokemon implements Pokedex {
  constructor(public readonly nombre: string, public readonly peso: number, public readonly altura: number, public tipo: tipo, public estadistBasicas: estadistBasicas) {
  }
}
