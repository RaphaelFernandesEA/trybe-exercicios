import Costumer, { raphael } from "./costumer";
import Item, { acai, fritas } from "./item";

enum Discount {
  DEZ = 0.1,
  TRINTA = 0.3 
}

export default class Order {
  constructor(
    private _costumer: Costumer,
    private _itens: Item[] = [],
    private _payment: string,
    private _discount?: Discount
  ) {}

  totalOrder() {
    let total = 0; 
    this._itens.forEach((item) => total += item.price)
    return total
  }

  orderWithDiscount() {
    if(this._discount === undefined) {
      return this.totalOrder
    } else {
      const total = this.totalOrder() - (this.totalOrder() * this._discount)
      return total
    }
  }
}