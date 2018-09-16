const Board = require("./Board");
const promptly = require("promptly");

class Player {
  constructor(name) {
    this.name = name;
    this.board = new Board();
  }

  async fireMissile() {
    let letters = Array.from({ length: Board.__WIDTH }, (_, i) =>
      String.fromCharCode(97 + i)
    );
    let numbers = Array.from({ length: Board.__WIDTH }, (_, i) =>
      (i + 1).toString()
    );
    let columnValidator = this.__inputValidator(letters);
    let rowValidator = this.__inputValidator(numbers);
    let column = await promptly.prompt(
      `Please pick a letter from ${letters[0]} to ${
        letters[letters.length - 1]
      }`,
      { validator: columnValidator }
    );
    let row = await promptly.prompt(
      `Please pick a number from ${numbers[0]} to ${
        numbers[numbers.length - 1]
      }`,
      { validator: rowValidator }
    );
    return [numbers.indexOf(row), letters.indexOf(column)];
  }

  checkForHit(coords) {
    let [x, y] = coords;
    this.board.view[x][y] = "M";
    this.board.ships.forEach(ship => {
      let hitHorizontalShip =
        ship.orientation === "horizontal" &&
        x === ship.startX &&
        y >= ship.startY &&
        y <= ship.endY;
      let hitVerticalShip =
        ship.orientation === "vertical" &&
        y === ship.startY &&
        x >= ship.startX &&
        x <= ship.endX;
      let hitIdx;
      if (hitHorizontalShip) hitIdx = y - ship.startY;
      else if (hitVerticalShip) hitIdx = x - ship.startX;
      if (hitIdx) {
        this.board.view[x][y] = "H";
        ship.recordHit(hitIdx);
        if (ship.isSunk()) {
          console.log(`You sunk a ship of length ${ship.length}!`);
        }
      }
    });
  }

  hasLost() {
    return this.board.ships.every(ship => ship.isSunk());
  }

  __inputValidator(data, input) {
    let lcInput = input.toLowerCase();
    if (!data.includes(lcInput)) {
      throw new Error(`Please enter a value in ${data}.`);
    }
    return lcInput;
  }
}

module.exports = Player;
