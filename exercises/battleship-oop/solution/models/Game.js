const promptly = require("promptly");
const Player = require("./Player");

class Game {
  async start() {
    let player1Name = await promptly.prompt("Player 1, what is your name? ");
    let player2Name = await promptly.prompt("Player 2, what is your name? ");
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
    let attacker = this.player1;
    let defender = this.player2;

    while (!this.__isOver()) {
      let coords = await attacker.fireMissile();
      defender.checkForHit(coords);
      [attacker, defender] = [defender, attacker];
    }
  }

  __isOver() {
    let winner = null;
    if (this.player1.hasLost()) winner = this.player2;
    if (this.player2.hasLost()) winner = this.player1;
    if (winner) console.log(`Game Over, ${winner.name} wins!`);
  }
}

module.exports = Game;
