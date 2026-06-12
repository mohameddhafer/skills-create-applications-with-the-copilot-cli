const { add, sub, mul, div, modulo, power, squareRoot } = require('../calculator');

describe('Calculator functions', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(sub(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(mul(45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(div(20, 5)).toBe(4);
  });

  test('division by zero throws an error', () => {
    expect(() => div(10, 0)).toThrow('Division by zero');
  });

  // New tests for extended operations
  test('modulo: 5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('modulo by zero throws an error', () => {
    expect(() => modulo(5, 0)).toThrow('Division by zero');
  });

  test('power: 2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('power with negative exponent: 2 ^ -1 = 0.5', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test('squareRoot: sqrt(16) = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('squareRoot of negative number throws an error', () => {
    expect(() => squareRoot(-9)).toThrow('Square root of negative number');
  });

  test('exports are functions', () => {
    expect(typeof add).toBe('function');
    expect(typeof sub).toBe('function');
    expect(typeof mul).toBe('function');
    expect(typeof div).toBe('function');
    expect(typeof modulo).toBe('function');
    expect(typeof power).toBe('function');
    expect(typeof squareRoot).toBe('function');
  });
});
