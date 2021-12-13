import { part1 } from './part1'
import { part2 } from './part2'
import { readFileSync } from 'fs';
import { join }  from 'path';

export const readInput : number[] = readFileSync(join(__dirname,'input.txt'), 'utf-8').toString().split("\r\n").map(str => Number(str));
console.log(part1(readInput));
console.log(part2(readInput));