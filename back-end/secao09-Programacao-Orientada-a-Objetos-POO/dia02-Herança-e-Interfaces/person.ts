export default class Person {
  private _name: string;
  private _birthDate: Date

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this.validateBirthDate(birthDate);
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

  validateBirthDate(birthDate: Date) {

    if(birthDate > new Date()) {
      throw new Error('Impossível registrar uma pessoa não nascida')
    };

    const currentDate = (((new Date().getTime()/1000)/3600)/24)/365;
    const birthdayDate = (((birthDate.getTime()/1000)/3600)/24)/365;

    if(currentDate - birthdayDate > 120) {
      throw new Error('Impossível você ser tão velho assim!!!')
    }

    this._birthDate = birthDate;
  }
};
