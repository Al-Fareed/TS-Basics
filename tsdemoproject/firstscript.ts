import * as fs from 'fs';
const input: string = fs.readFileSync('input.txt', 'utf8').trim();
const year: number = parseInt(input);

const isLeapYear = (year: number): boolean => {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isLeapYear(year));
