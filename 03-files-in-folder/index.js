const TARGET_DIR = 'secret-folder'
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, TARGET_DIR);

fs.readdir(dirPath, {withFileTypes: true}, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      if (file.isFile()) {
        let fileName = path.parse(file.name).name;
        let fileExt = path.extname(file.name).slice(1);
        let fileSize = '';

        fs.stat(path.join(dirPath, file.name), (err, stats) => {
          if (err) {
            console.log(err);
          } else {
            fileSize = stats.size;
            console.log(`${fileName} - ${fileExt} - ${fileSize} bytes`);
          }
        });
      }
    });
  }
});


