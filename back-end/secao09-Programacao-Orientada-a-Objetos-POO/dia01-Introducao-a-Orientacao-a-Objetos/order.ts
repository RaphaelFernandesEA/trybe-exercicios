import Costumer from "./costumer";
import Item from "./item";

export enum Discount {
  DEZ = 0.1,
  TRINTA = 0.3 
}

export enum Payment {
  DEBITO = 'debito',
  CREDITO = 'credito',
  PIX = 'pix',
}

export default class Order {
  private _price: number = 0;

  constructor(
    private _costumer: Costumer,
    private _itens: Item[] = [],
    private _payment: Payment,
    private _discount?: Discount,
  ) {}

  get price() {
    return this._price
  };

  set price(value) {
    this._price += value;
  };

  totalOrder() {
    this._itens.forEach((item) => this._price += item.price)
    console.log(`O valor total do pedido é: R$${this._price}`)
    return this._price
  };

  orderWithDiscount() {
    switch (this._discount) {
      case undefined:
        return this.totalOrder();
      case 0.1:
        this._itens.forEach((item) => this._price += item.price)
        this._price = this._price - (this._price * this._discount)
        console.log(`O valor do pedido com 10% de desconto é: ${this._price}`)
        return this._price;
      case 0.3:
        this._itens.forEach((item) => this._price += item.price)
        this._price = this._price - (this._price * this._discount)
        console.log(`O valor do pedido com 30% de desconto é: ${this._price}`)
        return this._price;
    };
  };
};