import Expression from './Expression';

class Constant extends Expression {
  constructor(value) {
    super();
    this.value = value;
  }

  evaluate() {
    return this.value;
  }
}

export default Constant;
