import Costumer from "./costumer";
import Item from "./item";
import Order from "./order";

const fritas = new Item('Batata frita', 20);
const acai = new Item('Açaí', 15);
const coxinha = new Item('Coxinha', 5);

const raphael = new Costumer('Raphael');

const pedido = new Order(raphael, [fritas, acai], 'pix', 0.1)

console.log(pedido.orderWithDiscount())