import { test, expect } from 'vitest'
import { Dice, flip, roll } from '../src/index'

const COUNT = 9999

test('flip', () => {
  let res: any = { 'heads': 0, 'tails': 0 }
  new Array(COUNT).fill(null).map(_ => flip()).forEach(r => (res[r]++))
  res = { 'heads': res['heads'] / COUNT, 'tails': res['tails'] / COUNT }
  expect(res['heads'] > 0.4 && res['heads'] < 0.6).toEqual(true)
  expect(res['tails'] > 0.4 && res['tails'] < 0.6).toEqual(true)
})

test('roll', () => {
  let res: any = { 0: 0, 1: 0 }
  new Array(COUNT).fill(null).map(_ => roll(0, 1)).forEach(r => (res[r]++))
  res = { 0: res[0] / COUNT, 1: res[1] / COUNT }
  expect(res[0] > 0.4 && res[0] < 0.6).toEqual(true)
  expect(res[1] > 0.4 && res[1] < 0.6).toEqual(true)
})

test('dice', () => {
  let res: any = { 1: 0, 2: 0 }
  new Array(COUNT).fill(null).map(_ => Dice(2).roll()).forEach(r => (res[r]++))
  res = { 1: res[1] / COUNT, 2: res[2] / COUNT }
  expect(res[1] > 0.4 && res[1] < 0.6).toEqual(true)
  expect(res[2] > 0.4 && res[2] < 0.6).toEqual(true)
})

test('1 - 6', () => {
  const d = Dice()
  const possibilities: (boolean | number)[] = [1, 2, 3, 4, 5, 6]
  new Array(COUNT).fill(null).forEach(_ => {
    expect(possibilities.includes(d.roll())).toEqual(true)
  })
})

test('1 - 2', () => {
  const d = Dice(2)
  const possibilities: (boolean | number)[] = [1, 2]
  new Array(COUNT).fill(null).forEach(_ => {
    expect(possibilities.includes(d.roll())).toEqual(true)
  })
})

test('true or false', () => {
  const d = Dice(2)
  const possibilities: (boolean | number)[] = [true, false]
  new Array(COUNT).fill(null).forEach(_ => {
    expect(possibilities.includes(d.rollAssert(1))).toEqual(true)
  })
})

test('1 - 9999', () => {
  const d = Dice(9999)
  const possibilities: (boolean | number)[] = []
  let i = 1
  while (i < 10000) {
    possibilities.push(i)
    i++
  }
  new Array(COUNT).fill(null).forEach(_ => {
    expect(possibilities.includes(d.roll())).toEqual(true)
  })
})
