const dateConversion = require("./minitask-1.js")
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

async function main() {
  const tanggal = await askQuestion('Masukkan tanggal : ');
  console.log(dateConversion(tanggal))
  rl.close();
}

main();
