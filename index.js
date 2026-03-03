const dateConversion = require("./date.js")
const readline = require('readline');
const inputTanggal = "24-04-2015"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan tanggal: ', (answer) => {
  console.log(dateConversion(answer))
  rl.close();
});