import espressoImg from './assets/espresso.png';
import cappuccinoImg from './assets/cappuccino.png';
import latteImg from './assets/latte.png';
import frappuccinoImg from './assets/frappuccino.png';
import affogatoImg from './assets/affogato.png';

const espresso = {
  nome: "Espresso Clássico",
  preco: "R$ 8,90",
  imagem: espressoImg,
  descricao: "A dose perfeita e intensa de café, com creme e sabor marcante.",
};

const cappuccino = {
  nome: "Cappuccino",
  preco: "R$ 14,90",
  imagem: cappuccinoImg,
  descricao: "Espresso com leite vaporizado e uma generosa camada de espuma de leite, finalizado com cacau em pó.",
};

const latte = {
  nome: "Latte Macchiato",
  preco: "R$ 14,90",
  imagem: latteImg,
  descricao: "Leite quente e espumado com uma dose de espresso, servido em camadas distintas em copo alto.",
};

const frappuccino = {
  nome: "Frappuccino",
  preco: "R$ 21,90",
  imagem: frappuccinoImg,
  descricao: "Café batido com gelo, leite e um toque de sabor a escolher (baunilha, chocolate ou caramelo), coberto com chantilly.",
};

const affogato = {
  nome: "Affogato",
  preco: "R$ 19,90",
  imagem: affogatoImg,
  descricao: "Uma dose quente de espresso derramada sobre uma bola de sorvete de creme gelado. O contraste perfeito!",
};

export const cafes = [
    espresso,
    cappuccino,
    latte,
    frappuccino,
    affogato,
]