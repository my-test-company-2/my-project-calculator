function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return '❌ Cannot divide by zero';
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

// CLI code (for user interaction)
if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter first number: ', (first) => {
    rl.question('Enter second number: ', (second) => {
      const a = parseFloat(first);
      const b = parseFloat(second);

      if (isNaN(a) || isNaN(b)) {
        console.log('❌ Invalid input. Please enter numbers.');
      } else {
        console.log(`✅ Add: ${a} + ${b} = ${add(a, b)}`);
        console.log(`✅ Subtract: ${a} - ${b} = ${subtract(a, b)}`);
        console.log(`✅ Multiply: ${a} * ${b} = ${multiply(a, b)}`);
        console.log(`✅ Divide: ${a} / ${b} = ${divide(a, b)}`);
      }

      rl.close();
    });
  });
}

