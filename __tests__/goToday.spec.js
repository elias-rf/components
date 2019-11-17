const dateToday = require('../src/goToday');

describe('dateToday', () => {
  it('', () => {
    expect(Object.prototype.toString.call(dateToday())).toBe('[object Date]');
  });
});
