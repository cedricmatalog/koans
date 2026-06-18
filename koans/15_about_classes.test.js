import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

describe('about classes', () => {
  class Account {
    #balance = 0;

    constructor(owner) {
      this.owner = owner;
    }

    deposit(amount) {
      this.#balance += amount;
      return this; // allow chaining
    }

    get balance() {
      return this.#balance;
    }

    set balance(amount) {
      if (amount >= 0) this.#balance = amount; // a setter can reject bad input
    }

    static currency() {
      return 'USD';
    }
  }

  test('open a new account', () => {
    const acct = new Account('Ada');
    expect(acct.owner).toBe(__);
    expect(acct.balance).toBe(__);
  });

  test('deposits update the balance and can be chained', () => {
    const acct = new Account('Ada');
    acct.deposit(100).deposit(50);
    expect(acct.balance).toBe(__);
  });

  test('static helpers belong to the class itself', () => {
    expect(Account.currency()).toBe(__);
  });

  test('private fields cannot be reached from outside', () => {
    const acct = new Account('Ada');
    expect(acct['#balance']).toBe(__); // #balance is private; bracket access looks for a public property
  });

  test('a setter looks like a plain assignment but runs code', () => {
    const acct = new Account('Ada');
    acct.balance = 500; // calls the setter, not a public field write
    expect(acct.balance).toBe(__);
    acct.balance = -100; // this assignment runs the setter's amount >= 0 guard
    expect(acct.balance).toBe(__);
  });

  class SavingsAccount extends Account {
    constructor(owner, ratePercent) {
      super(owner);
      this.ratePercent = ratePercent;
    }

    summary() {
      return `${this.owner} earns ${this.ratePercent}%`;
    }
  }

  test('a subclass extends the base class', () => {
    const s = new SavingsAccount('Ada', 5);
    s.deposit(200);
    expect(s.balance).toBe(__);
    expect(s.summary()).toBe(__);
    expect(s instanceof Account).toBe(__);
  });
});
