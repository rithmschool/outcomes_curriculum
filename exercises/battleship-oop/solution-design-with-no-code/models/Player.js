const Board = require("./Board");

class Player {
  constructor(name) {
    this.name = name;
    this.board = new Board();
  }

  fireMissile() {}

  checkForHit(coords) {}

  hasLost() {}

  __inputValidator(data) {}
}

module.exports = Player;
