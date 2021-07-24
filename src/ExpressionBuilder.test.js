import ExprBuilder from './ExpressionBuilder';

describe('expression builder', () => {
  it('5 * 10', () => {
    const builder = new ExprBuilder('5 * 10');
    const expr = builder.getExpression();
    expect(expr.evaluate()).toEqual(50);
  });

  it('(5 + 10)*5*-6', () => {
    const builder = new ExprBuilder('(5 + 10)*5*-6');
    const expr = builder.getExpression();
    expect(expr.evaluate()).toEqual(-450);
  });

  it('((5 + 10)+5)*-6', () => {
    const builder = new ExprBuilder('((5 + 10)+5)*-6');
    const expr = builder.getExpression();
    expect(expr.evaluate()).toEqual(-120);
  });

  it('-12*(15/3)', () => {
    const builder = new ExprBuilder('-12*(15/3)');
    const expr = builder.getExpression();
    expect(expr.evaluate()).toEqual(-60);
  });

  it('decimal values 5.5 + 2', () => {
    const builder = new ExprBuilder('5.5 + 2');
    const expr = builder.getExpression();
    expect(expr.evaluate()).toEqual(7.5);
  });

  it('division by zero 5/0', () => {
    const builder = new ExprBuilder('5/0');
    const expr = builder.getExpression();
    expect(expr.evaluate()).toEqual(Infinity);
  });

  it('should follow Bodmas rule', () => {
    expect(new ExprBuilder('2-1+4').getExpression().evaluate()).toBe(2 - 1 + 4);
    expect(new ExprBuilder('8/4*3').getExpression().evaluate()).toBe((8 / 4) * 3);
    expect(new ExprBuilder('8/4*3').getExpression().evaluate()).toBe((8 / 4) * 3);
    expect(new ExprBuilder('2+6-4*2/4').getExpression().evaluate()).toBe(2 + 6 - (4 * 2) / 4);
  });
});
