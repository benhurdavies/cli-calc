import Expression from './Expression';
import { PLUS, MINUS } from '../operator';

class Unary extends Expression {
  constructor(exp, operator) {
    super();
    this.exp = exp;
    this.operator = operator;
  }

  evaluate() {
    switch (this.operator) {
      case PLUS:
        return this.exp.evaluate();
      case MINUS:
        return -this.exp.evaluate();
      default:
        throw Error(`Not implemented operation type : ${this.operator}`);
    }
  }
}

export default Unary;
