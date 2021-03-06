import BinaryExp from '../expressions/Binary';
import ConstantExp from '../expressions/Constant';
import UnaryExp from '../expressions/Unary';
import * as operator from '../operator';
import Lexer from './Lexer';
import tokens from './token';

class RDParser extends Lexer {
  constructor(str) {
    super(str);
    this.currentToken = null;
  }

  createExpr() {
    this.currentToken = this.getToken();
    return this.expr();
  }

  /**
   * Grammar
   * EXPRESSION = TERM { "+" | "-" TERM }
   * TERM = FACTOR { "*" | "/" FACTOR }
   * FACTOR = NUMBER | ( EXPRESSION ) | {+|-} FACTOR
   */
  expr() {
    let retValue = this.term();
    while (this.currentToken === tokens.PLUS || this.currentToken === tokens.SUB) {
      const lastToken = this.currentToken;
      this.currentToken = this.getToken();
      const exp1 = this.term();
      retValue = new BinaryExp(retValue, exp1, lastToken === tokens.PLUS ? operator.PLUS : operator.MINUS);
    }
    return retValue;
  }

  term() {
    let retValue = this.factor();
    while (this.currentToken === tokens.MUL || this.currentToken === tokens.DIV) {
      const lastToken = this.currentToken;
      this.currentToken = this.getToken();
      const exp1 = this.factor();
      retValue = new BinaryExp(retValue, exp1, lastToken === tokens.MUL ? operator.MUL : operator.DIV);
    }
    return retValue;
  }

  factor() {
    let retValue = null;
    let lastToken = this.currentToken;
    if (this.currentToken === tokens.DOUBLE) {
      retValue = new ConstantExp(this.getNumber());
      this.currentToken = this.getToken();
    } else if (this.currentToken === tokens.O_PAREN) {
      this.currentToken = this.getToken();
      retValue = this.expr();
      if (this.currentToken !== tokens.C_PAREN) {
        throw Error('Missing Closing Parenthesis');
      }
      this.currentToken = this.getToken();
    } else if (this.currentToken === tokens.PLUS || this.currentToken === tokens.SUB) {
      lastToken = this.currentToken;
      this.currentToken = this.getToken();
      retValue = this.factor();
      retValue = new UnaryExp(retValue, lastToken === tokens.PLUS ? operator.PLUS : operator.MINUS);
    } else {
      throw Error(`Unexpected Token at index: ${this.index - 1}`);
    }
    return retValue;
  }
}

export default RDParser;
