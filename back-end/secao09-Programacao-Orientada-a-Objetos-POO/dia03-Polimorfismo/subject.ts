export default class Subject {
  private _name: string;

  constructor(name: string) {
    this._name = name
  };

  get name() {
    return this._name;
  };

  set name(name: string) {
    if (name.length < 3) throw new Error('O nome da disciplina deve conter no mínimo 3 caracteres') 
  };
};
