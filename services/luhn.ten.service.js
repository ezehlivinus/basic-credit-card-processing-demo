export const  isValidLuhn = (cardNumber) => {
  let numberOfDigits = cardNumber.length;

  let nSum = 0;
  let isSecondNumber = false;
  for (let count = numberOfDigits - 1; count >= 0; count--) {

      let digit = cardNumber[count].charCodeAt() - '0'.charCodeAt();

      // double the value of every second digit starting from the right
      if (isSecondNumber === true) {
        digit = digit * 2;
      }

      // We add two digits to handle cases that make two digit after doubling
      nSum += Number.parseInt(digit / 10, 10);
      nSum += digit % 10;

      isSecondNumber = !isSecondNumber;
  }
  return (nSum % 10 === 0);
}
