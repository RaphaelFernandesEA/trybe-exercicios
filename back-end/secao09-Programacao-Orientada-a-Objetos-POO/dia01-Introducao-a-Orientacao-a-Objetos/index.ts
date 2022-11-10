import Costumer from "./costumer";
import Item from "./item";
import Order, { Discount, Payment } from "./order";


const fritas = new Item('Batata frita', 20);
const acai = new Item('Açaí', 15);
const coxinha = new Item('Coxinha', 5);

const raphael = new Costumer('Raphael');

const pedido1 = new Order(raphael, [fritas, acai, coxinha], Payment.PIX , Discount.TRINTA);
const pedido2 = new Order(raphael, [fritas], Payment.CREDITO);
const pedido3 = new Order(raphael, [coxinha], Payment.DEBITO, Discount.DEZ)

pedido1.orderWithDiscount();
pedido2.orderWithDiscount();
pedido3.orderWithDiscount();