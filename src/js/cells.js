export default class Cells {
  constructor(x, y, parent) {
    this.x = x;
    this.y = y;
    this.count = x * y;
    this.parent = parent;
    this.cell = {
      width: Math.round(this.parent.offsetWidth / x) - 6,
      height: Math.round(this.parent.offsetHeight / y) - 6,
    };
    this.cells = document.getElementsByClassName('cells');
    this.goblin = document.querySelector('[data-busy=goblin]');
  }

  create() {
    for (let index = 0; index < this.count; index += 1) {
      const block = document.createElement('div');
      block.className = 'cells';
      block.style.width = `${this.cell.width}px`;
      block.style.height = `${this.cell.height}px`;
      this.parent.append(block);
    }
  }

  goStartPosition() {
    const pos = this.getPos(0);
    this.cells[pos].appendChild(this.goblin);
  }

  getPos(old) {
    let newPos;
    do {
      newPos = this.random();
    } while (newPos === old);
    this.position = newPos;
    return newPos;
  }

  random() {
    return Math.floor(Math.random() * this.count);
  }

  startRandom() {
    setInterval(() => {
      const old = Array.from(this.cells).findIndex((item) => item.firstChild !== null);
      const next = this.getPos(old);
      this.cells[next].appendChild(this.goblin);
    }, 2000);
  }
}
