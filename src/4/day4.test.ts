import { part1 } from "./part1";
import { part2 } from "./part2";
import { readLines } from "../utilities/utilities";

const readInput = readLines("../4/example.txt");

describe("Day 4", () => {
  describe("Part 1", () => {
    it("should return 4512", () => expect(part1(readInput)).toBe(4512))
  });
  describe("Part 2", () => {
     it("should return 1924", () => expect(part2(readInput)).toBe(1924))
   });
});
