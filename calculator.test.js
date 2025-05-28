const { add, subtract } = require('./calculator');

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
});

