class Ship {
  constructor(startX, startY, length, orientation = "horizontal") {
    this.startX = startX;
    this.startY = startY;
    this.orientation = orientation;
    this.length = length;
    this.__hitData = Array.from({ length }).fill(false);
  }

  get endX() {
    return this.orientation === "horizontal"
      ? this.startX + this.length - 1
      : this.startX;
  }

  get endY() {
    return this.orientation === "horizontal"
      ? this.startY
      : this.startY + this.length - 1;
  }

  isSunk() {
    return this.__hitData.every(Boolean);
  }

  recordHit(idx) {
    this.__hitData[idx] = true;
  }
}

module.exports = Ship;
