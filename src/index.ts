
/**
 * Create a dice with any number of sides, dice(6).roll() to roll it! You can also try rolling a specific side to get a boolean like so: dice(6).roll(6).
 *
 * @export
 * @param {number} [sides=6] The number of sides
 * @returns {{[sides: string]: number, [roll: string]: (?number) => (number | boolean)}}
 */
export default function dice (sides = 6) {
  return {
    sides,
    roll (target?: number): (number | boolean) {
      const randomNumber = Math.floor(Math.random() * this.sides) + 1
      if (target === undefined) return randomNumber
      return target === randomNumber
    }
  }
}
