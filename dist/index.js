function roll(minOrMax, max) {
  let _min = 0, _max = 100;
  if (minOrMax === void 0) ; else if (max === void 0) {
    _min = 0;
    _max = minOrMax;
  } else {
    _min = minOrMax;
    _max = max;
  }
  return Math.floor(Math.random() * (_max - _min + 1)) + _min;
}
function flip() {
  return roll(1) === 0 ? "heads" : "tails";
}
function Dice(sides = 6) {
  return {
    sides,
    roll() {
      return roll(1, this.sides);
    },
    rollAssert(targetNumber) {
      return roll(1, this.sides) === targetNumber;
    }
  };
}

export { Dice, flip, roll };
