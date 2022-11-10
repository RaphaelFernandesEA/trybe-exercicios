export default class Item {
  constructor(
    private _name: string,
    private _price: number,
  ) {}

  get price() {
    return this._price;
  }

  get name() {
    return this._name;
  }
}
