import { accounts } from '../index.js';

class Service {
  add({ name, cardNumber, balance, limit }, txn = null ) {
    if (!txn) {
      accounts.push({ name, cardNumber, balance, limit });
    }
  }

  charge(txn) { 
    // console.log('ready to charge')
    const account = this.findByName(txn.accountName);
      if (account.balance === 'error') {
        return 'error';
      }

      if ( this.removeCurrencySymbol(account.balance) + this.removeCurrencySymbol(txn.amount) > this.removeCurrencySymbol(account.limit)) {
        return 'declined';
      }

      const newBalance = this.removeCurrencySymbol(account.balance) + this.removeCurrencySymbol(txn.amount);
      accounts[account.index].balance = `$${newBalance}`;

   }

  credit(txn) { 
    // console.log('ready to credit')
    const account = this.findByName(txn.accountName);
      if (account.balance === 'error') {
        // console.log('error')
        return 'error';
      } 

      const newBalance = this.removeCurrencySymbol(account.balance) - this.removeCurrencySymbol(txn.amount);
      accounts[account.index].balance = `$${newBalance}`;

   }

  findByName(accountName) {
    for (let index in accounts) {
      if (accounts[index].name === accountName) {
        return { ...accounts[index], index};
      }
    }
    // const account = accounts.find((account, index) => account.name === accountName);
    // return { ...account, index };
    return undefined;
  }

  /**
   * @description - This method will return the just the figure
   * @param {String} value the value to remove currency symbols from
   */
  removeCurrencySymbol(value) {
    return Number(value.slice(1));
  }

  
  sortByName() {
    accounts.sort((accountA, accountB) => {
      return accountA.name.localeCompare(accountB.name);
    });
  }

  summary() {
    this.sortByName();
    let output = '';
    accounts.forEach(account => {
      output += `${account.name}: ${account.balance}\n`;
    })
    console.log('Summary...\n')
    console.log(output);
  }
}

export default new Service();