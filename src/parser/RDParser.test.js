import RDParser from './RDParser';
import Binary from '../expressions/Binary';
import Unary from '../expressions/Unary';
import Constant from '../expressions/Constant';

describe('parser/RDParser', () => {
  it('should generate a expression instance of Binary after parsing binary operation', () => {
    const expression = new RDParser('5 + 2 * 7').createExpr();
    expect(expression).toBeInstanceOf(Binary);
    expect(expression.evaluate()).toBe(19);
  });

  it('should generate a expression instance of Unary after parsing unary operation', () => {
    const expression = new RDParser('-5').createExpr();
    expect(expression).toBeInstanceOf(Unary);
    expect(expression.evaluate()).toBe(-5);
  });

  it('should generate a expression instance of Constant after parsing constant', () => {
    const expression = new RDParser('9.6').createExpr();
    expect(expression).toBeInstanceOf(Constant);
    expect(expression.evaluate()).toBe(9.6);
  });

  it('should throw error if expression is invalid', () => {
    expect(() => new RDParser('5 + 2 * ) 7').createExpr()).toThrowError('Unexpected Token at index: 8');
    expect(() => new RDParser('5 % 3').createExpr()).toThrowError(
      '@Index[2]: Error While Analyzing Tokens, Invalid token "%"',
    );
    expect(() => new RDParser('5 .').createExpr()).toThrowError(
      '@Index[3]: Error While Analyzing Tokens, unexpected "."',
    );
  });
});
