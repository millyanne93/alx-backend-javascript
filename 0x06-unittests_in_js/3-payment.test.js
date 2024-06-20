const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;

  beforeEach(() => {
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    calculateNumberSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM and the right arguments', () => {
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;

    consoleSpy.restore();
  });
});
