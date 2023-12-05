# @fd/math-modulo

Several variants of modulo operation.

## Install

```bash
bun add @fd/math-modulo
```

## Usage

```js
import {flooredModulo} from '@fd/math-modulo';

const result = flooredModulo(-1, 4)
const expect = 3
console.assert(result == expect)
```

## Usage (node / commonjs)

```js
const {flooredModulo} = require('@fd/math-modulo');

const result = flooredModulo(-1, 4)
const expect = 3
assert(result == expect)
```


## Functions

```js
function truncatedModulo(value: number, divisor: number): number
```
Based on truncated division, result have the same sign as the value.

```js
function euclideanModulo(value: number, divisor: number): number
```
Based on euclidean division, result is always non negative.

```js
function flooredModulo(value: number, divisor: number): number
```
Based on floored division, result have the same sign as the divisor.

```js
function roundedModulo(value: number, divisor: number): number
```
Based on rounded division, result have sign and falls between divisor/-2 and divisor/+2.

```js
function ceiledModulo(value: number, divisor: number): number
```
Based on ceiled division, result have the opposite sign as the divisor.

