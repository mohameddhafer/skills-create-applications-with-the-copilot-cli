const { add, sub, mul, div } = require('../calculator');

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

  test('exports are functions', () => {
    expect(typeof add).toBe('function');
    expect(typeof sub).toBe('function');
    expect(typeof mul).toBe('function');
    expect(typeof div).toBe('function');
  });
});
