import { part1 } from './part1'
import { part2 } from './part2'
import { readLines } from '../utilities/utilities'

const readInput = readLines('../2/example.txt');

describe('Day 2', () => {
  describe('Part 1', () => {
    it('should return 150', () => expect(part1(readInput)).toBe(150))
  })
  describe('Part 2', () => {
    it('should return 900', () => expect(part2(readInput)).toBe(900))
  })
});