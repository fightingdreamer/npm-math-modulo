/**
 * Truncated division based modulo
 * @returns remainder with the same sign as the value
 */
export function truncated(value: number, divisor: number): number {
  const quotient = Math.trunc(value / divisor);
  const remainder = value - divisor * quotient;
  return remainder;
}

/**
 * Euclidean division based modulo
 * @returns non negative remainder
 */
export function euclidean(value: number, divisor: number): number {
  const abs_divisor = Math.abs(divisor);
  const quotient = Math.floor(value / abs_divisor);
  const remainder = value - abs_divisor * quotient;
  return remainder;
}

/**
 * Floored division based modulo
 * @returns remainder with the same sign as the divisor
 */
export function floored(value: number, divisor: number): number {
  const quotient = Math.floor(value / divisor);
  const remainder = value - divisor * quotient;
  return remainder;
}

/**
 * Rounded (IEEE 754) division based modulo
 * @returns remainder with sign between divisor/-2 and divisor/+2
 */
export function rounded(value: number, divisor: number): number {
  const quotient = Math.round(value / divisor);
  const remainder = value - divisor * quotient;
  return remainder;
}

/**
 * Ceiled division based modulo
 * @returns remainder with the opposite sign of that of the divisor
 */
export function ceiled(value: number, divisor: number): number {
  const quotient = Math.ceil(value / divisor);
  const remainder = value - divisor * quotient;
  return remainder;
}
