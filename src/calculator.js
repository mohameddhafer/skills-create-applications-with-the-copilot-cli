#!/usr/bin/env node
/*
  Node.js CLI Calculator

  Supported operations:
  - addition (add or +)
  - subtraction (sub or -)
  - multiplication (mul or *)
  - division (div or /)

  Usage (examples):
    node src/calculator.js add 2 3    # 5
    node src/calculator.js sub 5 2    # 3
    node src/calculator.js mul 4 6    # 24
    node src/calculator.js div 8 2    # 4

  The module exports add, sub, mul, div functions for importing in other scripts.
*/

function toNumber(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) {
    throw new Error(`Invalid number: ${value}`);
  }
  return n;
}

// Exposed arithmetic functions
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

// Additional functions requested: modulo, power, squareRoot
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(n);
}

// CLI entrypoint when run directly
if (require.main === module) {
  const args = process.argv.slice(2);
  const op = args[0];

  function usage() {
    console.error('Usage: node src/calculator.js <operation> <number> [<number>]');
    console.error('Supported operations: add(+), sub(-), mul(*), div(/), mod(%), pow(^), sqrt');
    process.exit(2);
  }

  if (!op) usage();

  // Handle unary operation sqrt which requires one operand
  if (op === 'sqrt') {
    const aRaw = args[1];
    if (aRaw === undefined) usage();
    let a;
    try {
      a = toNumber(aRaw);
    } catch (err) {
      console.error(err.message);
      process.exit(2);
    }

    try {
      const result = squareRoot(a);
      console.log(result);
    } catch (err) {
      console.error(err.message);
      process.exit(3);
    }
    process.exit(0);
  }

  const aRaw = args[1];
  const bRaw = args[2];
  if (aRaw === undefined || bRaw === undefined) usage();

  let a, b;
  try {
    a = toNumber(aRaw);
    b = toNumber(bRaw);
  } catch (err) {
    console.error(err.message);
    process.exit(2);
  }

  let result;
  try {
    switch (op) {
      case 'add':
      case '+':
        result = add(a, b);
        break;
      case 'sub':
      case '-':
        result = sub(a, b);
        break;
      case 'mul':
      case '*':
        result = mul(a, b);
        break;
      case 'div':
      case '/':
        result = div(a, b);
        break;
      case 'mod':
      case '%':
        result = modulo(a, b);
        break;
      case 'pow':
      case '^':
        result = power(a, b);
        break;
      default:
        console.error(`Unknown operation: ${op}`);
        usage();
    }
  } catch (err) {
    console.error(err.message);
    process.exit(3);
  }

  // Print result to stdout
  console.log(result);
}

module.exports = { add, sub, mul, div, modulo, power, squareRoot };
