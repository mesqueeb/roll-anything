import test from 'ava'
import { Dice, flip, roll } from '../src/index'

const COUNT = 9999

test('flip', t => {
  let res = { 'heads': 0, 'tails': 0 }
  new Array(COUNT).fill(null).map(_ => flip()).forEach(r => (res[r]++))
  res = { 'heads': res['heads'] / COUNT, 'tails': res['tails'] / COUNT }
  t.assert(res['heads'] > 0.4 && res['heads'] < 0.6, JSON.stringify(res))
  t.assert(res['tails'] > 0.4 && res['tails'] < 0.6, JSON.stringify(res))
})

test('roll', t => {
  let res = { 0: 0, 1: 0 }
  new Array(COUNT).fill(null).map(_ => roll(0, 1)).forEach(r => (res[r]++))
  res = { 0: res[0] / COUNT, 1: res[1] / COUNT }
  t.assert(res[0] > 0.4 && res[0] < 0.6, JSON.stringify(res))
  t.assert(res[1] > 0.4 && res[1] < 0.6, JSON.stringify(res))
})

test('dice', t => {
  let res = { 1: 0, 2: 0 }
  new Array(COUNT).fill(null).map(_ => Dice(2).roll()).forEach(r => (res[r]++))
  res = { 1: res[1] / COUNT, 2: res[2] / COUNT }
  t.assert(res[1] > 0.4 && res[1] < 0.6, JSON.stringify(res))
  t.assert(res[2] > 0.4 && res[2] < 0.6, JSON.stringify(res))
})

test('1 - 6', t => {
  const d = Dice()
  const possibilities: (boolean | number)[] = [1, 2, 3, 4, 5, 6]
  new Array(COUNT).fill(null).forEach(_ => t.true(possibilities.includes(d.roll())))
})

test('1 - 2', t => {
  const d = Dice(2)
  const possibilities: (boolean | number)[] = [1, 2]
  new Array(COUNT).fill(null).forEach(_ => t.true(possibilities.includes(d.roll())))
})

test('true or false', t => {
  const d = Dice(2)
  const possibilities: (boolean | number)[] = [true, false]
  new Array(COUNT).fill(null).forEach(_ => t.true(possibilities.includes(d.rollAssert(1))))
})

test('1 - 9999', t => {
  const d = Dice(9999)
  const possibilities: (boolean | number)[] = []
  let i = 1
  while (i < 10000) {
    possibilities.push(i)
    i++
  }
  new Array(COUNT).fill(null).forEach(_ => t.true(possibilities.includes(d.roll())))
})
