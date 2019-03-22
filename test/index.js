import test from 'ava'
import dice from '../dist/index.cjs'

test('1 - 6', t => {
  const d = dice()
  const possibilities = [1, 2, 3, 4, 5, 6]
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
})

test('1 - 2', t => {
  const d = dice(2)
  const possibilities = [1, 2]
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
  t.true(possibilities.includes(d.roll()))
})

test('true or false', t => {
  const d = dice(2)
  const possibilities = [true, false]
  t.true(possibilities.includes(d.roll(1)))
  t.true(possibilities.includes(d.roll(1)))
  t.true(possibilities.includes(d.roll(1)))
  t.true(possibilities.includes(d.roll(1)))
  t.true(possibilities.includes(d.roll(1)))
  t.true(possibilities.includes(d.roll(1)))
})
