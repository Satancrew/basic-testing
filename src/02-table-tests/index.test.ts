// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  // Add
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },

  // Substract
  { a: 10, b: 2, action: Action.Substract, expected: 8 },
  { a: 12, b: 5, action: Action.Substract, expected: 7 },
  { a: 7, b: 4, action: Action.Substract, expected: 3 },

  // Multiply
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 5, b: 4, action: Action.Multiply, expected: 20 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },

  // Divide
  { a: 8, b: 4, action: Action.Divide, expected: 2 },
  { a: 15, b: 3, action: Action.Divide, expected: 5 },
  { a: 20, b: 2, action: Action.Divide, expected: 10 },

  // Exponentiate
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: 10, b: 2, action: Action.Exponentiate, expected: 100 },

  // Invalid Action

  { a: 5, b: 2, action: '--', expected: null },
  { a: 12, b: 4, action: '+++', expected: null },
  { a: 4, b: 6, action: '%!+', expected: null },

  // Invalid arguments
  { a: 'four', b: 2, action: Action.Add, expected: null },
  { a: 2, b: 'seven', action: Action.Divide, expected: null },
  { a: 'three', b: 2, action: Action.Substract, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'check all tests from testCases',
    ({ a, b, action, expected }) => {
      const answer = simpleCalculator({ a, b, action });
      expect(answer).toBe(expected);
    },
  );
});
