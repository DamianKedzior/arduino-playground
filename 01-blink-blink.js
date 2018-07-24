var five = require('johnny-five');
var board = new five.Board();

const A = 8;
const B = 9;
const C = 2;
const D = 3;
const E = 4;
const F = 5;
const G = 6;

board.on('ready', function () {

  var clear = () => {
    this.digitalWrite(A, 0);
    this.digitalWrite(B, 0);
    this.digitalWrite(C, 0);
    this.digitalWrite(D, 0);
    this.digitalWrite(E, 0);
    this.digitalWrite(F, 0);
    this.digitalWrite(G, 0);
  }

  var zero = () => {
    this.digitalWrite(A, 1);
    this.digitalWrite(B, 1);
    this.digitalWrite(C, 1);
    this.digitalWrite(D, 1);
    this.digitalWrite(E, 1);
    this.digitalWrite(F, 1);
    this.digitalWrite(G, 0);
  }

  var one = () => {
    this.digitalWrite(A, 0);
    this.digitalWrite(B, 1);
    this.digitalWrite(C, 1);
    this.digitalWrite(D, 0);
    this.digitalWrite(E, 0);
    this.digitalWrite(F, 0);
    this.digitalWrite(G, 0);
  }

  var two = () => {
    this.digitalWrite(A, 1);
    this.digitalWrite(B, 1);
    this.digitalWrite(C, 0);
    this.digitalWrite(D, 1);
    this.digitalWrite(E, 1);
    this.digitalWrite(F, 0);
    this.digitalWrite(G, 1);
  }

  var three = () => {
    this.digitalWrite(A, 1);
    this.digitalWrite(B, 1);
    this.digitalWrite(C, 1);
    this.digitalWrite(D, 1);
    this.digitalWrite(E, 0);
    this.digitalWrite(F, 0);
    this.digitalWrite(G, 1);
  }

  var four = () => {
    this.digitalWrite(A, 0);
    this.digitalWrite(B, 1);
    this.digitalWrite(C, 1);
    this.digitalWrite(D, 0);
    this.digitalWrite(E, 0);
    this.digitalWrite(F, 1);
    this.digitalWrite(G, 1);
  }

  var five = () => {
    this.digitalWrite(A, 1);
    this.digitalWrite(B, 0);
    this.digitalWrite(C, 1);
    this.digitalWrite(D, 1);
    this.digitalWrite(E, 0);
    this.digitalWrite(F, 1);
    this.digitalWrite(G, 1);
  }

  var six = () => {
    this.digitalWrite(A, 1);
    this.digitalWrite(B, 0);
    this.digitalWrite(C, 1);
    this.digitalWrite(D, 1);
    this.digitalWrite(E, 1);
    this.digitalWrite(F, 1);
    this.digitalWrite(G, 1);
  }

  var seven = () => {
    this.digitalWrite(A, 1);
    this.digitalWrite(B, 1);
    this.digitalWrite(C, 1);
    this.digitalWrite(D, 0);
    this.digitalWrite(E, 0);
    this.digitalWrite(F, 0);
    this.digitalWrite(G, 0);
  }

  var eight = () => {
    this.digitalWrite(A, 1);
    this.digitalWrite(B, 1);
    this.digitalWrite(C, 1);
    this.digitalWrite(D, 1);
    this.digitalWrite(E, 1);
    this.digitalWrite(F, 1);
    this.digitalWrite(G, 1);
  }

  var nine = () => {
    this.digitalWrite(A, 1);
    this.digitalWrite(B, 1);
    this.digitalWrite(C, 1);
    this.digitalWrite(D, 1);
    this.digitalWrite(E, 0);
    this.digitalWrite(F, 1);
    this.digitalWrite(G, 1);
  }

  var controller = {
    zero: zero,
    clear: clear,
    one: one,
    two: two,
    three: three,
    four: four,
    five: five,
    six: six,
    seven: seven,
    eight: eight,
    nine: nine
  };

  this.repl.inject({
    ctrl: controller
  });

  this.on("exit", () => {
    clear();
  });

});
