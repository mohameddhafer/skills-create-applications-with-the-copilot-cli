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

// CLI entrypoint when run directly
if (require.main === module) {
  const [, , op, aRaw, bRaw] = process.argv;

  function usage() {
    console.error('Usage: node src/calculator.js <add|sub|mul|div|+|-|*|/> <number> <number>');
    process.exit(2);
  }

  if (!op || aRaw === undefined || bRaw === undefined) usage();

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
      default:
        console.error(`Unknown operation: ${op}`);
        usage();
    }
  } catch (err) {
    console.error(err.message);
    process.exit(3);
  }

  // Print result to stdout
  // If result is an integer, print without trailing .0
  if (Number.isInteger(result)) {
    console.log(result);
  } else {
    console.log(result);
  }
}

module.exports = { add, sub, mul, div };
