import Constant from './Constant';

describe('expressions/Constant', () => {
  it('should return constant', () => {
    expect(new Constant(1).evaluate()).toBe(1);
    expect(new Constant(-1).evaluate()).toBe(-1);
    expect(new Constant(98.6).evaluate()).toBe(98.6);
  });
});
