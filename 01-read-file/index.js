const fs = require('fs');
const path = require('path');

const textFilePath = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(textFilePath, 'utf-8');

stream.on('data', (chunk) => console.log(chunk));
stream.on("error", (error) => console.log("Error", error.message));