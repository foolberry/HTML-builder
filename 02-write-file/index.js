const fs = require('fs');
const path = require('path');
const readline = require('readline');

let rl = readline.createInterface(process.stdin, process.stdout);

const textFilePath = path.join(__dirname, 'text.txt');
const outputStream = fs.createWriteStream(textFilePath);

rl.setPrompt('Hello, User! Please write some text and I will save it to file\n');
rl.prompt();
rl.on('line', (data) => {
  if (data === 'exit') {
    rl.close();
  } else {
  outputStream.write(data + '\n');
  }
})
rl.on('close', () => {
  console.log('Thank you. You can find your data in text.txt file');
})