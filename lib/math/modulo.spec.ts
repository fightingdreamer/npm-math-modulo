import { test, expect, describe } from "vitest";
import {
  truncatedModulo,
  euclideanModulo,
  flooredModulo,
  roundedModulo,
  ceiledModulo,
} from "./modulo";

describe("modulo", () => {
  test.each([
    { value: -9, divider: 4, expected: -1 },
    { value: -8, divider: 4, expected: 0 },
    { value: -7, divider: 4, expected: -3 },
    { value: -6, divider: 4, expected: -2 },
    { value: -5, divider: 4, expected: -1 },
    { value: -4, divider: 4, expected: 0 },
    { value: -3, divider: 4, expected: -3 },
    { value: -2, divider: 4, expected: -2 },
    { value: -1, divider: 4, expected: -1 },
    { value: 0, divider: 4, expected: 0 },
    { value: +1, divider: 4, expected: 1 },
    { value: +2, divider: 4, expected: 2 },
    { value: +3, divider: 4, expected: 3 },
    { value: +4, divider: 4, expected: 0 },
    { value: +5, divider: 4, expected: 1 },
    { value: +6, divider: 4, expected: 2 },
    { value: +7, divider: 4, expected: 3 },
    { value: +8, divider: 4, expected: 0 },
    { value: +9, divider: 4, expected: 1 },
  ])(
    "truncated($value, $divider) -> $expected",
    ({ value, divider, expected }) => {
      expect(truncatedModulo(value, divider)).toEqual(expected);
    },
  );

  test.each([
    { value: -9, divider: -4, expected: -1 },
    { value: -8, divider: -4, expected: 0 },
    { value: -7, divider: -4, expected: -3 },
    { value: -6, divider: -4, expected: -2 },
    { value: -5, divider: -4, expected: -1 },
    { value: -4, divider: -4, expected: 0 },
    { value: -3, divider: -4, expected: -3 },
    { value: -2, divider: -4, expected: -2 },
    { value: -1, divider: -4, expected: -1 },
    { value: 0, divider: -4, expected: 0 },
    { value: +1, divider: -4, expected: 1 },
    { value: +2, divider: -4, expected: 2 },
    { value: +3, divider: -4, expected: 3 },
    { value: +4, divider: -4, expected: 0 },
    { value: +5, divider: -4, expected: 1 },
    { value: +6, divider: -4, expected: 2 },
    { value: +7, divider: -4, expected: 3 },
    { value: +8, divider: -4, expected: 0 },
    { value: +9, divider: -4, expected: 1 },
  ])(
    "truncated($value, $divider) -> $expected",
    ({ value, divider, expected }) => {
      expect(truncatedModulo(value, divider)).toEqual(expected);
    },
  );
});

describe("modulo", () => {
  test.each([
    { value: -9, divider: 4, expected: 3 },
    { value: -8, divider: 4, expected: 0 },
    { value: -7, divider: 4, expected: 1 },
    { value: -6, divider: 4, expected: 2 },
    { value: -5, divider: 4, expected: 3 },
    { value: -4, divider: 4, expected: 0 },
    { value: -3, divider: 4, expected: 1 },
    { value: -2, divider: 4, expected: 2 },
    { value: -1, divider: 4, expected: 3 },
    { value: 0, divider: 4, expected: 0 },
    { value: +1, divider: 4, expected: 1 },
    { value: +2, divider: 4, expected: 2 },
    { value: +3, divider: 4, expected: 3 },
    { value: +4, divider: 4, expected: 0 },
    { value: +5, divider: 4, expected: 1 },
    { value: +6, divider: 4, expected: 2 },
    { value: +7, divider: 4, expected: 3 },
    { value: +8, divider: 4, expected: 0 },
    { value: +9, divider: 4, expected: 1 },
  ])(
    "euclidean($value, $divider) -> $expected",
    ({ value, divider, expected }) => {
      expect(euclideanModulo(value, divider)).toEqual(expected);
    },
  );

  test.each([
    { value: -9, divider: -4, expected: 3 },
    { value: -8, divider: -4, expected: 0 },
    { value: -7, divider: -4, expected: 1 },
    { value: -6, divider: -4, expected: 2 },
    { value: -5, divider: -4, expected: 3 },
    { value: -4, divider: -4, expected: 0 },
    { value: -3, divider: -4, expected: 1 },
    { value: -2, divider: -4, expected: 2 },
    { value: -1, divider: -4, expected: 3 },
    { value: 0, divider: -4, expected: 0 },
    { value: +1, divider: -4, expected: 1 },
    { value: +2, divider: -4, expected: 2 },
    { value: +3, divider: -4, expected: 3 },
    { value: +4, divider: -4, expected: 0 },
    { value: +5, divider: -4, expected: 1 },
    { value: +6, divider: -4, expected: 2 },
    { value: +7, divider: -4, expected: 3 },
    { value: +8, divider: -4, expected: 0 },
    { value: +9, divider: -4, expected: 1 },
  ])(
    "euclidean($value, $divider) -> $expected",
    ({ value, divider, expected }) => {
      expect(euclideanModulo(value, divider)).toEqual(expected);
    },
  );
});

describe("modulo", () => {
  test.each([
    { value: -9, divider: 4, expected: 3 },
    { value: -8, divider: 4, expected: 0 },
    { value: -7, divider: 4, expected: 1 },
    { value: -6, divider: 4, expected: 2 },
    { value: -5, divider: 4, expected: 3 },
    { value: -4, divider: 4, expected: 0 },
    { value: -3, divider: 4, expected: 1 },
    { value: -2, divider: 4, expected: 2 },
    { value: -1, divider: 4, expected: 3 },
    { value: 0, divider: 4, expected: 0 },
    { value: +1, divider: 4, expected: 1 },
    { value: +2, divider: 4, expected: 2 },
    { value: +3, divider: 4, expected: 3 },
    { value: +4, divider: 4, expected: 0 },
    { value: +5, divider: 4, expected: 1 },
    { value: +6, divider: 4, expected: 2 },
    { value: +7, divider: 4, expected: 3 },
    { value: +8, divider: 4, expected: 0 },
    { value: +9, divider: 4, expected: 1 },
  ])(
    "floored($value, $divider) -> $expected",
    ({ value, divider, expected }) => {
      expect(flooredModulo(value, divider)).toEqual(expected);
    },
  );

  test.each([
    { value: -9, divider: -4, expected: -1 },
    { value: -8, divider: -4, expected: 0 },
    { value: -7, divider: -4, expected: -3 },
    { value: -6, divider: -4, expected: -2 },
    { value: -5, divider: -4, expected: -1 },
    { value: -4, divider: -4, expected: 0 },
    { value: -3, divider: -4, expected: -3 },
    { value: -2, divider: -4, expected: -2 },
    { value: -1, divider: -4, expected: -1 },
    { value: 0, divider: -4, expected: 0 },
    { value: +1, divider: -4, expected: -3 },
    { value: +2, divider: -4, expected: -2 },
    { value: +3, divider: -4, expected: -1 },
    { value: +4, divider: -4, expected: 0 },
    { value: +5, divider: -4, expected: -3 },
    { value: +6, divider: -4, expected: -2 },
    { value: +7, divider: -4, expected: -1 },
    { value: +8, divider: -4, expected: 0 },
    { value: +9, divider: -4, expected: -3 },
  ])(
    "floored($value, $divider) -> $expected",
    ({ value, divider, expected }) => {
      expect(flooredModulo(value, divider)).toEqual(expected);
    },
  );
});

describe("modulo", () => {
  test.each([
    { value: -9, divider: 4, expected: -1 },
    { value: -8, divider: 4, expected: 0 },
    { value: -7, divider: 4, expected: 1 },
    { value: -6, divider: 4, expected: -2 },
    { value: -5, divider: 4, expected: -1 },
    { value: -4, divider: 4, expected: 0 },
    { value: -3, divider: 4, expected: 1 },
    { value: -2, divider: 4, expected: -2 },
    { value: -1, divider: 4, expected: -1 },
    { value: 0, divider: 4, expected: 0 },
    { value: +1, divider: 4, expected: 1 },
    { value: +2, divider: 4, expected: -2 },
    { value: +3, divider: 4, expected: -1 },
    { value: +4, divider: 4, expected: 0 },
    { value: +5, divider: 4, expected: 1 },
    { value: +6, divider: 4, expected: -2 },
    { value: +7, divider: 4, expected: -1 },
    { value: +8, divider: 4, expected: 0 },
    { value: +9, divider: 4, expected: 1 },
  ])(
    "rounded($value, $divider) -> $expected",
    ({ value, divider, expected }) => {
      expect(roundedModulo(value, divider)).toEqual(expected);
    },
  );

  test.each([
    { value: -9, divider: -4, expected: -1 },
    { value: -8, divider: -4, expected: 0 },
    { value: -7, divider: -4, expected: 1 },
    { value: -6, divider: -4, expected: 2 },
    { value: -5, divider: -4, expected: -1 },
    { value: -4, divider: -4, expected: 0 },
    { value: -3, divider: -4, expected: 1 },
    { value: -2, divider: -4, expected: 2 },
    { value: -1, divider: -4, expected: -1 },
    { value: 0, divider: -4, expected: 0 },
    { value: +1, divider: -4, expected: 1 },
    { value: +2, divider: -4, expected: 2 },
    { value: +3, divider: -4, expected: -1 },
    { value: +4, divider: -4, expected: 0 },
    { value: +5, divider: -4, expected: 1 },
    { value: +6, divider: -4, expected: 2 },
    { value: +7, divider: -4, expected: -1 },
    { value: +8, divider: -4, expected: 0 },
    { value: +9, divider: -4, expected: 1 },
  ])(
    "rounded($value, $divider) -> $expected",
    ({ value, divider, expected }) => {
      expect(roundedModulo(value, divider)).toEqual(expected);
    },
  );
});

describe("modulo", () => {
  test.each([
    { value: -9, divider: 4, expected: -1 },
    { value: -8, divider: 4, expected: 0 },
    { value: -7, divider: 4, expected: -3 },
    { value: -6, divider: 4, expected: -2 },
    { value: -5, divider: 4, expected: -1 },
    { value: -4, divider: 4, expected: 0 },
    { value: -3, divider: 4, expected: -3 },
    { value: -2, divider: 4, expected: -2 },
    { value: -1, divider: 4, expected: -1 },
    { value: 0, divider: 4, expected: 0 },
    { value: +1, divider: 4, expected: -3 },
    { value: +2, divider: 4, expected: -2 },
    { value: +3, divider: 4, expected: -1 },
    { value: +4, divider: 4, expected: 0 },
    { value: +5, divider: 4, expected: -3 },
    { value: +6, divider: 4, expected: -2 },
    { value: +7, divider: 4, expected: -1 },
    { value: +8, divider: 4, expected: 0 },
    { value: +9, divider: 4, expected: -3 },
  ])(
    "ceiled($value, $divider) -> $expected",
    ({ value, divider, expected }) => {
      expect(ceiledModulo(value, divider)).toEqual(expected);
    },
  );

  test.each([
    { value: -9, divider: -4, expected: 3 },
    { value: -8, divider: -4, expected: 0 },
    { value: -7, divider: -4, expected: 1 },
    { value: -6, divider: -4, expected: 2 },
    { value: -5, divider: -4, expected: 3 },
    { value: -4, divider: -4, expected: 0 },
    { value: -3, divider: -4, expected: 1 },
    { value: -2, divider: -4, expected: 2 },
    { value: -1, divider: -4, expected: 3 },
    { value: 0, divider: -4, expected: 0 },
    { value: +1, divider: -4, expected: 1 },
    { value: +2, divider: -4, expected: 2 },
    { value: +3, divider: -4, expected: 3 },
    { value: +4, divider: -4, expected: 0 },
    { value: +5, divider: -4, expected: 1 },
    { value: +6, divider: -4, expected: 2 },
    { value: +7, divider: -4, expected: 3 },
    { value: +8, divider: -4, expected: 0 },
    { value: +9, divider: -4, expected: 1 },
  ])(
    "ceiled($value, $divider) -> $expected",
    ({ value, divider, expected }) => {
      expect(ceiledModulo(value, divider)).toEqual(expected);
    },
  );
});
