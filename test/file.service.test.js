import chai from 'chai';
import { accounts } from '../index.js';
import { fileReader } from '../services/file.service.js';
const { assert } = chai;

describe('fileReader', () => {
  beforeEach(() => {
    accounts.length = 0;
  });

  // after(() => {
  //   process.exit(0)
  // })

  it('should read file and return array of entries', async () => {
    const filename = './test/file.txt';
    const entries = await fileReader(filename);

    assert.isArray(entries);
    assert.equal(entries.length, 8);
    
    assert.equal(entries[0], 'Add Tom 4111111111111111 $1000');
    assert.equal(entries[1], 'Add Lisa 5454545454545454 $3000');
    assert.equal(entries[2], 'Add Quincy 1234567890123456 $2000');
    
    assert.equal(entries[3], 'Charge Tom $500');
    assert.equal(entries[4], 'Charge Tom $800');
    assert.equal(entries[5], 'Charge Lisa $7');
    
    assert.equal(entries[6], 'Credit Lisa $100');
    assert.equal(entries[7], 'Credit Quincy $200');

  });

  it('accounts should have three entries after adding accounts', async () => {
    const filename = './test/file.txt';
    const entries = await fileReader(filename);

    assert.isArray(entries);
    assert.equal(accounts.length, 3);
  });

  it('account should return empty account if empty file', async () => {
    const filename = './test/empty.txt';
    const entries = await fileReader(filename);

    assert.isArray(entries);
    assert.equal(accounts.length, 0);
  })
});