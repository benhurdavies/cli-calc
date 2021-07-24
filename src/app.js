import readline from 'readline';
import ExpressionBuilder from './ExpressionBuilder';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const lineIt = rl[Symbol.asyncIterator]();

function rlClose() {
  rl.close();
  rl.removeAllListeners();
}

console.log('*** Welcome to Basic calculator cli-calc. Have fun ;) ***');
console.log('---------- Type "exit" to close the calculator ----------');
console.log('------------- Please enter your expression --------------');

function printResponse(val) {
  console.log(`> ${val}`);
}

(async function loop() {
  process.stdout.write('> ');
  const exprStr = (await lineIt.next()).value;
  if (exprStr.toLowerCase() === 'exit') {
    rlClose();
    return;
  }

  const exprBuilder = new ExpressionBuilder(exprStr);
  try {
    printResponse(exprBuilder.getExpression(exprStr).evaluate());
  } catch (error) {
    printResponse(error);
  }
  return loop();
})();
