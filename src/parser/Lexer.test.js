import { it } from '@jest/globals';
import Lexer from './Lexer';
import token from './token';

describe('parser/Lexer', () => {
  it('should return proper tokens for simple expression', () => {
    const lexParser = new Lexer('5 + 2');
    expect(lexParser.getToken()).toBe(token.DOUBLE);
    expect(lexParser.getNumber()).toBe(5);
    expect(lexParser.getToken()).toBe(token.PLUS);
    expect(lexParser.getToken()).toBe(token.DOUBLE);
    expect(lexParser.getNumber()).toBe(2);
  });

  it('should return proper tokens for parentheses ', () => {
    const lexParser = new Lexer('(5 + 2) * 2');
    expect(lexParser.getToken()).toBe(token.O_PAREN);
    expect(lexParser.getToken()).toBe(token.DOUBLE);
    expect(lexParser.getNumber()).toBe(5);
    expect(lexParser.getToken()).toBe(token.PLUS);
    expect(lexParser.getToken()).toBe(token.DOUBLE);
    expect(lexParser.getNumber()).toBe(2);
    expect(lexParser.getToken()).toBe(token.C_PAREN);
    expect(lexParser.getToken()).toBe(token.MUL);
    expect(lexParser.getToken()).toBe(token.DOUBLE);
    expect(lexParser.getNumber()).toBe(2);
  });

  it('should throw error with index if there is illegal token exists', () => {
    const lexParser = new Lexer('5 a 2');
    expect(lexParser.getToken()).toBe(token.DOUBLE);
    expect(() => lexParser.getToken()).toThrowError('@Index[2]: Error While Analyzing Tokens');
  });
});
