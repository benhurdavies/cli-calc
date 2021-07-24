import Binary from './Binary';
import Constant from './Constant';
import * as operator from '../operator';

describe('expressions/Binary', () => {
  it('should do binary addition expression', () => {
    const add1 = new Binary(new Constant(4), new Constant(2), operator.PLUS);
    expect(add1.evaluate()).toBe(6);
    expect(new Binary(new Constant(1.8), add1, operator.PLUS).evaluate()).toBe(7.8);
  });

  it('should do binary subtraction expression', () => {
    const sub1 = new Binary(new Constant(4), new Constant(2), operator.MINUS);
    expect(sub1.evaluate()).toBe(2);
    expect(new Binary(new Constant(1.5), sub1, operator.MINUS).evaluate()).toBe(-0.5);
  });

  it('should do binary mutilation expression', () => {
    const multi1 = new Binary(new Constant(4), new Constant(2), operator.MUL);
    expect(multi1.evaluate()).toBe(8);
    expect(new Binary(multi1, new Constant(2), operator.MUL).evaluate()).toBe(16);
  });

  it('should do binary division expression', () => {
    const div1 = new Binary(new Constant(4), new Constant(2), operator.DIV);
    expect(div1.evaluate()).toBe(2);
    expect(new Binary(div1, new Constant(2), operator.DIV).evaluate()).toBe(1);
  });

  it('should throw error if the operator is not implemented', () => {
    expect(() => new Binary(new Constant(4), new Constant(2), 'SOME').evaluate()).toThrowError(
      'Not implemented operation type : SOME',
    );
  });
});
