import { readFileSync } from 'fs';
import { join }  from 'path';

export const readLines = (file : string) => readFileSync(join(__dirname, file), 'utf-8').toString().split("\r\n")