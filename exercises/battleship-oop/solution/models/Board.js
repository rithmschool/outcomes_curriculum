const Ship = require("./Ship");

class Board {
  constructor() {
    this.ships = [];
    this.view = Array.from({ length: Board.__WIDTH }, () =>
      Array.from({ length: Board.__HEIGHT }).fill(" ")
    );
    this.__placeAllShips();
  }

  print() {
    let commasToPipes = arr => arr.toString().replace(/,/g, " | ");
    let count = Board.__WIDTH + 1;
    let rowsToPrint = [
      `${" ".repeat(4)}${"+---".repeat(count - 1)}+`,
      `${" ".repeat(4)}| ${commasToPipes(Board.columnLabels)} |`,
      ...this.view.map(
        (viewRow, i) =>
          `${"+---".repeat(count)}+\n| ${Board.rowLabels[i]} | ${commasToPipes(
            viewRow
          )} |`
      ),
      `${"+---".repeat(count)}+`
    ];
    rowsToPrint.forEach(row => console.log(row));
  }

  __placeAllShips() {
    Board.__INITIAL_SHIP_LENGTHS.forEach(length => {
      let newShip;
      do {
        let orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
        let startX, startY;
        if (orientation === "horizontal") {
          startX = Math.floor(Math.random() * (Board.__WIDTH - length + 1));
          startY = Math.floor(Math.random() * Board.__HEIGHT);
        } else {
          startX = Math.floor(Math.random() * Board.__WIDTH);
          startY = Math.floor(Math.random() * (Board.__HEIGHT - length + 1));
        }
        newShip = new Ship(startX, startY, length, orientation);
      } while (!this.__tryToPlaceShip(newShip));
    });
  }

  __tryToPlaceShip(newShip) {
    let isCollision = this.ships.some(
      ship =>
        // the ships collide precisely when these conditions are all met
        // math ftw!
        newShip.startX <= ship.endX &&
        ship.startX <= newShip.endX &&
        newShip.startY <= ship.endY &&
        ship.startY <= newShip.endY
    );
    if (isCollision) return false;
    this.ships.push(newShip);
    return true;
  }
}

Board.__WIDTH = 10;
Board.__HEIGHT = 10;
Board.columnLabels = Array.from({ length: Board.__WIDTH }, (_, i) =>
  String.fromCharCode(65 + i)
);
Board.rowLabels = Array.from({ length: Board.__HEIGHT }, (_, i) =>
  i.toString()
);
Board.__INITIAL_SHIP_LENGTHS = [5, 4, 3, 3, 2];

module.exports = Board;
