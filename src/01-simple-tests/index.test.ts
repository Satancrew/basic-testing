// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const answer = simpleCalculator({ a: 10, b: 5, action: Action.Add });
    expect(answer).toBe(15);
  });

  test('should substract two numbers', () => {
    const answer = simpleCalculator({ a: 12, b: 3, action: Action.Substract });
    expect(answer).toBe(9);
  });

  test('should multiply two numbers', () => {
    const answer = simpleCalculator({ a: 6, b: 4, action: Action.Multiply });
    expect(answer).toBe(24);
  });

  test('should divide two numbers', () => {
    const answer = simpleCalculator({ a: 20, b: 5, action: Action.Divide });
    expect(answer).toBe(4);
  });

  test('should exponentiate two numbers', () => {
    const answer = simpleCalculator({
      a: 2,
      b: 4,
      action: Action.Exponentiate,
    });
    expect(answer).toBe(16);
  });

  test('should return null for invalid action', () => {
    const answer = simpleCalculator({ a: 4, b: 6, action: '--' });
    expect(answer).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const answer = simpleCalculator({ a: 'seven', b: 3, action: Action.Add });
    expect(answer).toBeNull();
  });
});
