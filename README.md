# Roll anything 🎲

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

```js
import dice from 'roll-anything'

const dice = dice()
// will return
  {
    sides: 6,
    roll: function
  }

// rolling
dice().roll() // will return 1 ~ 6
dice(2).roll() // will return 1 ~ 2
dice(10).roll() // will return 1 ~ 10

// roll and evaluate
dice(6).roll(6)
// will roll 1~6 and return true if it rolled 6 immidiately
dice(2).roll(1)
// 50-50 chance
```

## Source code

The source code is litterally just this, but written in TypeScript:

```js
export default function dice (sides = 6) {
  return {
    sides,
    roll (target) {
      const randomNumber = Math.floor(Math.random() * this.sides) + 1
      if (target === undefined) return randomNumber
      return target === randomNumber
    }
  }
}
```
