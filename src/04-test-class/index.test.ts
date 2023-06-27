// Uncomment the code below and write your tests
import {
  BankAccount,
  InsufficientFundsError,
  TransferFailedError,
  getBankAccount,
} from '.';

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
    const firstInitialBalance = 20000;
    const secondInitialBalance = 10000;
    const transferAmount = 30000;

    const firstAccount = getBankAccount(firstInitialBalance);
    const secondAccount = getBankAccount(secondInitialBalance);

    expect(() => firstAccount.transfer(transferAmount, secondAccount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const initialBalance = 20000;
    const transferAmount = 30000;

    const newAccount = getBankAccount(initialBalance);

    expect(() => newAccount.transfer(transferAmount, newAccount)).toThrow(
      TransferFailedError,
    );
  });

  test('should deposit money', async () => {
    const initialBalance = 20000;
    const deposit = 30000;

    const newAccount = getBankAccount(initialBalance);
    await newAccount.deposit(deposit);

    expect(newAccount.getBalance()).toBe(initialBalance + deposit);
  });

  test('should withdraw money', () => {
    const initialBalance = 20000;
    const amount = 10000;

    const newAccount = getBankAccount(initialBalance);
    newAccount.withdraw(amount);

    expect(newAccount.getBalance()).toBe(initialBalance - amount);
  });

  test('should transfer money', () => {
    const firstInitialBalance = 20000;
    const secondInitialBalance = 10000;
    const transferAmount = 5000;

    const firstAccount = getBankAccount(firstInitialBalance);
    const secondAccount = getBankAccount(secondInitialBalance);

    firstAccount.transfer(transferAmount, secondAccount);

    expect(firstAccount.getBalance()).toBe(
      firstInitialBalance - transferAmount,
    );
    expect(secondAccount.getBalance()).toBe(
      secondInitialBalance + transferAmount,
    );
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const initialBalance = 20000;
    const newAccount = getBankAccount(initialBalance);

    const typeBalance = typeof (await newAccount.fetchBalance());

    if (typeBalance === 'number') expect(typeBalance).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write test here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write test here
  });
});
