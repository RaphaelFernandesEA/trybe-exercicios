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

export default class Date {
  private _day: number;
  private _month: Month;
  private _year: number;

  constructor(day: number, month: Month, year: number) {
    this._day = day;
    this._month = month;
    this._year = year;
  }
}