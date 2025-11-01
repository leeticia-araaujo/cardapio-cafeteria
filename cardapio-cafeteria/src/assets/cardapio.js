import espressoImg from './cafes/espresso.png';
import cappuccinoImg from './cafes/cappuccino.png';
import latteImg from './cafes/latte.png';
import frappuccinoImg from './cafes/frappuccino.png';
import affogatoImg from './cafes/affogato.png';

import croissantImg from './comidas/croissant.png';
import bannofeImg from './comidas/bannofe.png';
import paoImg from '.comidas/pao-de-queijo.png';
import boloImg from './comidas/bolo-cenoura.png';

import aguaSemGasImg from './bebidas/agua-sem-gas.png';
import aguaComGasImg from './bebidas/agua-com-gas.png';
import refrigeranteImg from './bebidas/refrigerante.png';
import chocolateImg from './bebidas/chocolate-quente.png';
import sucoImg from './bebidas/suco.png';

//cafés 
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

//comidas
const croissant = {
  nome: "Croissant",
  preco: "R$ 21,90",
  imagem: croissantImg,
  descricao: "Massa folhada amanteigada e crocante. Escolha o recheio: Queijo e Presunto (tradicional e saboroso) ou Chocolate Belga (para os amantes de doce).",
};

const bannofe = {
  nome: "Bannofe",
  preco: "R$ 19,90",
  imagem: bannofeImg,
  descricao: "Sobremesa inglesa com base de biscoito, fatias de banana fresca, toffee (doce de leite cozido) e uma nuvem de chantilly.",
};

const paoDeQueijo = {
  nome: "Pão de Queijo",
  preco: "R$ 16,90",
  imagem: paoImg,
  descricao: "O clássico mineiro, quentinho e crocante por fora, macio e com muito queijo por dentro.",
};

const boloCenoura = {
  nome: "Bolo de Cenoura",
  preco: "R$ 16,90",
  imagem: boloImg,
  descricao: "Fatia generosa de bolo de cenoura caseiro, fofinho e úmido, coberto com uma cremosa e irresistível calda de chocolate.",
};

//outras bebidas
const aguaSemGas = {
  nome: "Água Sem Gás",
  preco: "R$ 3,00",
  imagem: aguaSemGasImg,
  descricao: "Água mineral sem gás.",
};

const aguaComGas = {
  nome: "Água Com Gás",
  preco: "R$ 3,50",
  imagem: aguaComGasImg,
  descricao: "Água mineral com gás.",
};

const refrigerante = {
  nome: "Refrigerante Lata",
  preco: "R$ 6,50",
  imagem: refrigeranteImg,
  descricao: "Seleção de refrigerantes tradicionais em lata (coca-cola, guaraná, fanta, sprite).",
};

const chocolateQuente = {
  nome: "Chocolate Quente",
  preco: "R$ 12,90",
  imagem: chocolateImg,
  descricao: "Bebida encorpada e aveludada, feita com chocolate de verdade. Um abraço em forma de caneca.",
};

const suco = {
  nome: "Suco Natural",
  preco: "R$ 10,90",
  imagem: sucoImg,
  descricao: "Suco de frutas frescas do dia (laranja, abacaxi ou limão). Consulte as opções disponíveis.",
};

export const cafes = [
    espresso,
    cappuccino,
    latte,
    frappuccino,
    affogato,
]

export const comidas = [
    croissant,
    bannofe,
    paoDeQueijo,
    boloCenoura,
]

export const bebidas = [
    aguaSemGas,
    aguaComGas,
    refrigerante,
    chocolateQuente,
    suco,
]