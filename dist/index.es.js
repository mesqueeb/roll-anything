/**
 * Roll any number. When passing no arguments it returns a number between 0 - 100; including 0 and 100
 * @param {number} [minOrMax] When passing only 1 argument it returns a number between 0 and the argument; including 0 and the argument
 * @param {number} [max] When passing 2 arguments, they are considered "min" and "max"; it returns a number between min - max; including min and max
 * @returns {number}
 */
function roll(minOrMax, max) {
    let _min = 0, _max = 100;
    if (minOrMax === void 0) ;
    else if (max === void 0) {
        _min = 0;
        _max = minOrMax;
    }
    else {
        _min = minOrMax;
        _max = max;
    }
    return Math.floor(Math.random() * (_max - _min + 1)) + _min;
}
/**
 * Returns 'heads' or 'tails' at random
 * @returns {'heads' | 'tails'}
 */
function flip() {
    return roll(1) === 0 ? 'heads' : 'tails';
}
/**
 * Create a dice with any number of sides, dice(6).roll() to roll it!
 * You can also try rolling a specific side to return a boolean like so: dice(6).rollAssert(6).
 *
 * @export
 * @param {?number} [sides=6] The number of sides
 * @returns {{ sides: number, roll: () => number, rollAssert: (target: number) => boolean }}
 */
function Dice(sides = 6) {
    return {
        sides,
        roll() {
            return roll(1, this.sides);
        },
        rollAssert(targetNumber) {
            return roll(1, this.sides) === targetNumber;
        },
    };
}

export { Dice, flip, roll };
