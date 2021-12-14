import { part1 } from "./part1";
import { part2 } from "./part2";
import { readLines } from "../utilities/utilities";

const readInput = readLines("../3/example.txt");

describe("Day 3", () => {
  describe("Part 1", () => {
    it("should return 198", () => expect(part1(readInput)).toBe(198))
  });
  describe("Part 2", () => {
    it("should return 230", () => expect(part2(readInput)).toBe(230))
  });
});
