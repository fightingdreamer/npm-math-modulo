import { test, expect, describe } from "vitest";
import { truncated, euclidean, floored, rounded, ceiled } from "./modulo";

describe("truncated", () => {
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
      expect(truncated(value, divider)).toEqual(expected);
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
      expect(truncated(value, divider)).toEqual(expected);
    },
  );
});

describe("euclidean", () => {
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
      expect(euclidean(value, divider)).toEqual(expected);
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
      expect(euclidean(value, divider)).toEqual(expected);
    },
  );
});

describe("floored", () => {
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
      expect(floored(value, divider)).toEqual(expected);
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
      expect(floored(value, divider)).toEqual(expected);
    },
  );
});

describe("rounded", () => {
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
      expect(rounded(value, divider)).toEqual(expected);
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
      expect(rounded(value, divider)).toEqual(expected);
    },
  );
});

describe("ceiled", () => {
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
      expect(ceiled(value, divider)).toEqual(expected);
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
      expect(ceiled(value, divider)).toEqual(expected);
    },
  );
});
