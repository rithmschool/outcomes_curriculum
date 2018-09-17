const Ship = require("./Ship");

class Board {
  constructor() {
    this.ships = [];
    this.view = Array.from({ length: Board.__WIDTH }, () =>
      Array.from({ length: Board.__HEIGHT }).fill(" ")
    );
    this.__placeAllShips();
  }

  print() {}

  __tableRowBorder() {}

  __tableRowContent(dataArray) {}

  __placeAllShips() {}

  __tryToPlaceShip(newShip) {}
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
