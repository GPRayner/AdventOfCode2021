import { part1 } from './part1'
import { part2 } from './part2'
import { readLines } from '../utilities/utilities'

export const readInput = readLines('../1/input.txt').map(Number);
console.log(`Part 1: ${part1(readInput)}`);
console.log(`Part 2: ${part2(readInput)}`);