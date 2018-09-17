class Ship {
  constructor(startX, startY, length, orientation = "horizontal") {
    this.startX = startX;
    this.startY = startY;
    this.orientation = orientation;
    this.length = length;
    this.__hitData = Array.from({ length }).fill(false);
  }

  get endX() {}

  get endY() {}

  isSunk() {}

  recordHit(idx) {}
}

module.exports = Ship;
