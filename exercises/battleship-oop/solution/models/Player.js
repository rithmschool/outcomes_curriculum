const Board = require("./Board");
const promptly = require("promptly");

class Player {
  constructor(name) {
    this.name = name;
    this.board = new Board();
  }

  async fireMissile() {
    console.log(`\n${this.name}, it is your turn.`);
    console.log("Your opponent's board is pictured above.");
    console.log("Please select where you would like to fire.");
    let letters = Board.columnLabels;
    let numbers = Board.rowLabels;
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
    return [letters.indexOf(column), numbers.indexOf(row)];
  }

  checkForHit(coords) {
    let [ltr, num] = coords;
    let hitIdx;
    for (let ship of this.board.ships) {
      let hitHorizontalShip =
        ship.orientation === "horizontal" &&
        num === ship.startY &&
        ltr >= ship.startX &&
        ltr <= ship.endX;
      let hitVerticalShip =
        ship.orientation === "vertical" &&
        ltr === ship.startX &&
        num >= ship.startY &&
        num <= ship.endY;
      if (hitHorizontalShip) hitIdx = ltr - ship.startX;
      else if (hitVerticalShip) hitIdx = num - ship.startY;
      if (hitIdx !== undefined) {
        console.log("You hit a ship!");
        this.board.view[num][ltr] = "H";
        ship.recordHit(hitIdx);
        if (ship.isSunk()) {
          console.log(`You sunk a ship of length ${ship.length}!`);
        }
        return;
      }
    }
    console.log("You missed!");
    this.board.view[num][ltr] = "M";
  }

  hasLost() {
    return this.board.ships.every(ship => ship.isSunk());
  }

  __inputValidator(data) {
    return function(input) {
      let ucInput = input.toUpperCase();
      if (!data.includes(ucInput)) {
        throw new Error(`Please enter a value in ${data}.`);
      }
      return ucInput;
    };
  }
}

module.exports = Player;
