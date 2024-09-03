import bulbasaurImg from "./assets/pokemons/bulbasaur.svg";
import chikoritaImg from "./assets/pokemons/chikorita.svg";
import eeveeImg from "./assets/pokemons/eevee.svg";
import pichuImg from "./assets/pokemons/pichu.svg";
import squirtleImg from "./assets/pokemons/squirtle.svg";

import { shuffleArray } from "./utils/shuffleArray";

export const cards = shuffleArray([
  {
    id: 1,
    value: "pichu",
    image: pichuImg,
  },
  {
    id: 2,
    value: "bulbasaur",
    image: bulbasaurImg,
  },
  {
    id: 3,
    value: "pichu",
    image: pichuImg,
  },
  {
    id: 4,
    value: "bulbasaur",
    image: bulbasaurImg,
  },
  {
    id: 5,
    value: "eevee",
    image: eeveeImg,
  },
  {
    id: 6,
    value: "chikorita",
    image: chikoritaImg,
  },
  {
    id: 7,
    value: "eevee",
    image: eeveeImg,
  },
  {
    id: 8,
    value: "chikorita",
    image: chikoritaImg,
  },
  {
    id: 9,
    value: "squirtle",
    image: squirtleImg,
  },
  {
    id: 10,
    value: "squirtle",
    image: squirtleImg,
  },
]);
