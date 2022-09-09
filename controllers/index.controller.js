import { isValidLuhn } from "../services/luhn.ten.service.js";
import service from "../services/index.service.js";
import { fileReader } from "../services/file.service.js";

export const handleInput = (input) => {
  const txn = {
    txnType: input[0],
    accountName: input[1],
    amount: input[2]
    }

  if (input[0] === 'Charge') {
    
    service.charge(txn);
  } else if (input[0] === 'Credit') {
    service.credit(txn);
  }else if (input[0] === 'Add') {
    const account = {
      name: input[1],
      cardNumber: input[2],
      limit: input[3]
    }

    let balance = isValidLuhn(account.cardNumber) ? '$0' : 'error';
    account.balance = balance;

    service.add({ ...account });
  }

}

export const handleFileReading = async (filename) => {
  return fileReader(filename);
}

export const handleStandardInput = async () => {
  return standardInput();
}
