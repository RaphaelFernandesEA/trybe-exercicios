export default class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  };

  get name() {
    return this._name;
  };

  set name(name: string) {
    if(name.length < 3) {
      throw new Error(`O nome deve ter no mínimo 3 letras`)
    }
    this._name = name;
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(birthDate: Date) {
    if(birthDate > new Date()) {
      throw new Error('Impossível registrar uma previsão de nascimento')
    }
    const convertTime = 1000 / 3600 / 24 / 365;
    if((new Date().getTime() - birthDate.getTime()) / convertTime > 120 ) {
      throw new Error('Impossível você ser tão velho assim!!!')
    }
    this._birthDate = birthDate;
  }
};

const raphael = new Person('Raphael', new Date(1990, 1, 8))
// const person = new Person('João', new Date(2006, 11, 8));
// person.name = 'jo';
console.log(raphael);
// console.log(person);

// console.log(new Date())