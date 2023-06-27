// Uncomment the code below and write your tests
import { BankAccount, InsufficientFundsError, getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const initialBalance = 50000;
    const newAccount = getBankAccount(initialBalance);
    expect(newAccount).toBeInstanceOf(BankAccount);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const initialBalance = 500;
    const transferAmount = 800;
    const newAccount = getBankAccount(initialBalance);
    expect(() => newAccount.withdraw(transferAmount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
  });

  test('should throw error when transferring to the same account', () => {
    // Write your code here
  });

  test('should deposit money', async () => {
    // Write your code here
  });

  test('should withdraw money', () => {
    // Write your code here
  });

  test('should transfer money', () => {
    // Write your code here
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your code here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
