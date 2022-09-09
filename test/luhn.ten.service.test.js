import { assert } from "chai";
import { isValidLuhn } from "../services/luhn.ten.service.js";

describe('Luhn 10', () => {
  it('should return true for valid card number', () => {
    assert.equal(isValidLuhn('4111111111111111'), true);
  })

  it('should return false for invalid card number', () => {
    assert.equal(isValidLuhn('4111111111111112'), false);
  })
})