import Expression from './Expression';
import * as operator from '../operator';

class Binary extends Expression {
  constructor(exp1, exp2, operator) {
    super();
    this.exp1 = exp1;
    this.exp2 = exp2;
    this.operator = operator;
  }

  evaluate() {
    switch (this.operator) {
      case operator.PLUS:
        return this.exp1.evaluate() + this.exp2.evaluate();
      case operator.MINUS:
        return this.exp1.evaluate() - this.exp2.evaluate();
      case operator.DIV:
        return this.exp1.evaluate() / this.exp2.evaluate();
      case operator.MUL:
        return this.exp1.evaluate() * this.exp2.evaluate();
      default:
        throw Error(`Not implemented operation type : ${this.operator}`);
    }
  }
}

export default Binary;
