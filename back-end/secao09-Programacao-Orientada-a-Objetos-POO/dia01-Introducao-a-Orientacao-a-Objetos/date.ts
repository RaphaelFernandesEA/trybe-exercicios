export enum Month {
  'january' = 1,
  'february' = 2,
  'march' = 3,
  'april' = 4, 
  'may' = 5,
  'june' = 6,
  'july' = 7,
  'august' = 8,
  'september' = 9,
  'october' = 10,
  'novemder' = 11,
  'december' = 12
};

export default class Data {
  private _day: number;
  private _month: Month;
  private _year: number;

  constructor(day: number, month: Month, year: number) {

    const dateString = `${month}-${day}-${year}`
    
    if (new Date(dateString).getDate() !== day) {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    } else {
      this._day = day;
      this._month = month;
      this._year = year;
    }
  }

  get day(): number {
    return this._day;
  }

  set day(value: number) {
    this._day = value;
  }

  get month(): number {
    return this._month;
  }

  set month(value: number) {
    this._month = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  getMonthName() {
    return Month[this._month]

  }

  isLeapYear() {
    if (this._year % 4 === 0) {
      return true;
    }
    return false;
  }

  compare(date: Data) {
    
  }
}

const date = new Data(22,12,1995);

console.log(date);
console.log(date.getMonthName());
console.log(date.isLeapYear());