import Constant from './Constant';
import Unary from './Unary';
import * as operator from '../operator';

describe('expressions/Unary', () => {
  it('should do plus Unary operation', () => {
    expect(new Unary(new Constant(5), operator.PLUS).evaluate()).toBe(5);
  });

  it('should do minus Unary operation', () => {
    expect(new Unary(new Constant(5), operator.MINUS).evaluate()).toBe(-5);
  });

  it('should throw error if the operator is not implemented', () => {
    expect(() => new Unary(new Constant(4), operator.DIV).evaluate()).toThrowError(
      `Not implemented operation type : ${operator.DIV}`,
    );
  });
});
