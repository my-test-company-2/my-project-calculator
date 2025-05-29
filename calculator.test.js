const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator Tests', () => {
  test('adds 5 + 3 to equal 8', () => {
    expect(add(5, 3)).toBe(8);
  });

  test('adds -2 + 7 to equal 5', () => {
    expect(add(-2, 7)).toBe(5);
  });

  test('subtracts 10 - 4 to equal 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts 3 - 7 to equal -4', () => {
    expect(subtract(3, 7)).toBe(-4);
  });

  test('multiplies 4 * 5 to equal 20', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test('multiplies -3 * 6 to equal -18', () => {
    expect(multiply(-3, 6)).toBe(-18);
  });

  test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides -9 / 3 to equal -3', () => {
    expect(divide(-9, 3)).toBe(-3);
  });

  test('division by zero returns error message', () => {
    expect(divide(5, 0)).toBe('❌ Cannot divide by zero');
  });
});
