const dateConversion = require('./dateInternal.js')
//const dateConversion = require("./date.js")
const readline = require('readline/promises');

const { stdin: input, stdout: output } = require('process');

async function ambilInput() {
  const rl = readline.createInterface({ input, output });

  try {
    const tanggal = await rl.question('Masukkan tanggal : ');
    console.log(dateConversion(tanggal))
  } catch (err) {
    console.error(err);
  } finally {
    rl.close();
  }
}

ambilInput();

