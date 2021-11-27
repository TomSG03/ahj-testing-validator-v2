export default class Card {
  constructor() {
    this.pay = new Map([
      ['visa', [4]],
      ['masterCard', [51, 52, 53, 54, 55]],
      ['discover', [60]],
      ['jcb', [31, 35, 36, 38]],
      ['amExpress', [34, 37]],
      ['mir', [2]],
    ]);
    this.cardNum = 0;
  }

  getPay(searchValue) {
    for (const [key, value] of this.pay.entries()) {
      const find = value.findIndex((e) => e === Number(searchValue));
      if (find !== -1) {
        return key;
      }
    }
    return -1;
  }

  getPaySystem() {
    let searchPay = '';
    if (this.cardNum[0] === '2' || this.cardNum[0] === '4') {
      searchPay = this.cardNum.substring(0, 1);
    } else {
      searchPay = this.cardNum.substring(0, 2);
    }
    const systemPay = this.getPay(searchPay);
    if (systemPay !== -1) {
      return systemPay;
    }
    return -1;
  }

  luhnAlgorithm() {
    const value = this.cardNum;
    if (/[^0-9-\s]+/.test(value)) return false;
    let nCheck = 0;
    let bEven = false;
    for (let n = value.length - 1; n >= 0; n -= 1) {
      let nDigit = parseInt(value.charAt(n), 10);
      if (bEven) {
        nDigit *= 2;
        if (nDigit > 9) {
          nDigit -= 9;
        }
      }
      nCheck += nDigit;
      bEven = !bEven;
    }
    return (nCheck % 10) === 0;
  }
}
