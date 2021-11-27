export default class Interface {
  constructor(block) {
    this.cards = block.getElementsByClassName('card');
    this.message = block.querySelector('.message-box .message');
  }

  showCard(code) {
    for (let index = 0; index < [...this.cards].length; index += 1) {
      if ([...this.cards][index].dataset.card === code) {
        [...this.cards][index].classList.remove('invalid');
        [...this.cards][index].classList.add('valid');
      }
    }
  }

  hideCard() {
    for (let index = 0; index < [...this.cards].length; index += 1) {
      if (![...this.cards][index].classList.contains('invalid')) {
        [...this.cards][index].classList.add('invalid');
      }
      if ([...this.cards][index].classList.contains('valid')) {
        [...this.cards][index].classList.remove('valid');
      }
    }
  }

  showMessage(mess) {
    this.message.innerHTML = mess;
  }
}
