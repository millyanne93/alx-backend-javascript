const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 3 when inputs are 1.2 and 2.1', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 2.1), 3);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return -1 when inputs are 1.2 and 2.1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 2.1), -1);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when inputs are 1.4 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 0.6666666666666666 when inputs are 1.5 and 3', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3), 0.6666666666666666);
    });
  });
});
