const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 3 when inputs are 1.2 and 2.1', () => {
      expect(calculateNumber('SUM', 1.2, 2.1)).to.equal(3);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return -1 when inputs are 1.2 and 2.1', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 2.1)).to.equal(-1);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when inputs are 1.4 and 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 0.6666666666666666 when inputs are 1.5 and 3', () => {
      expect(calculateNumber('DIVIDE', 1.5, 3)).to.equal(0.6666666666666666);
    });
  });
});
