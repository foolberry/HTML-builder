const STYLES_DIR = 'styles';
const DEST_DIR = 'project-dist';
const BUNDLE_NAME = 'bundle.css';
const fs = require('fs');
const path = require('path');

const stylesPath = path.join(__dirname, STYLES_DIR);
const destPath = path.join(__dirname, DEST_DIR);
const bundlePath = path.join(destPath, BUNDLE_NAME);

fs.readdir(stylesPath, (err, files) => {
  if (err) console.log(err);

  const outputStream = fs.createWriteStream(bundlePath);
  files.forEach((file) => {
    if (path.extname(file) === '.css') {
      const filePath = path.join(stylesPath, file);
      const inputStream = fs.createReadStream(filePath, 'utf-8');
      inputStream.on('data', (chunk) => outputStream.write(chunk));
    }
  })
})
