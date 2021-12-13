import { part1 } from './part1'
import { part2 } from './part2'
import { readLines } from '../utilities/utilities'

export const readInput = readLines('../2/input.txt');
console.log(`Part 1: ${part1(readInput)}`);
console.log(`Part 2: ${part2(readInput)}`);