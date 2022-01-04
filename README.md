# Roll anything 🎲

<a href="https://www.npmjs.com/package/roll-anything"><img src="https://img.shields.io/npm/v/roll-anything.svg" alt="Total Downloads"></a>
<a href="https://www.npmjs.com/package/roll-anything"><img src="https://img.shields.io/npm/dw/roll-anything.svg" alt="Latest Stable Version"></a>

```
npm i roll-anything
```

A very tiny dice util. You can roll a dice with any amount of sides.

## Meet the family

- [roll-anything 🎲](https://github.com/mesqueeb/roll-anything)
- [merge-anything 🥡](https://github.com/mesqueeb/merge-anything)
- [filter-anything ⚔️](https://github.com/mesqueeb/filter-anything)
- [find-and-replace-anything 🎣](https://github.com/mesqueeb/find-and-replace-anything)
- [compare-anything 🛰](https://github.com/mesqueeb/compare-anything)
- [copy-anything 🎭](https://github.com/mesqueeb/copy-anything)
- [flatten-anything 🏏](https://github.com/mesqueeb/flatten-anything)
- [is-what 🙉](https://github.com/mesqueeb/is-what)

## Usage

### Roll a number

```js
import { roll } from 'roll-anything'

// Rolling 🎲👋
roll() // returns a random number between 0-100; including 0 and 100
roll(10) // returns a random number between 0-10; including 0 and 10
roll(5, 10) // returns a random number between 5-10; including 5 and 10
```

### Flip a coin

```js
import { flip } from 'roll-anything'

flip() // returns 'heads' or 'tails' at random
```

### Dice 🎲

```js
import { Dice } from 'roll-anything'

// Create a die of 6 sides
const dice = Dice(6)
// returns { sides: 6, roll: function }

dice.roll() // returns 1 ~ 6
dice.sides // returns 6

// Rolling 🎲👋
Dice().roll() // returns 1 ~ 6
// → 6 sided dice is the default.

Dice(2).roll() // returns 1 ~ 2
Dice(10).roll() // returns 1 ~ 10

// Roll a specific number
Dice(6).rollAssert(6)
// rolls 1 ~ 6
//   then returns `true` if it rolled 6 or `false` if it didn't

Dice(2).rollAssert(1)
// 50-50 chance to get `true` or `false`
```

## Source code

See the source code [here](./src/index.ts).
