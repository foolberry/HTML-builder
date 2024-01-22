const fs = require('fs');
const path = require('path');

function copyDir(dirName) {
  const targetDirPath = path.join(__dirname, dirName);
  const newDirPath = `${targetDirPath}-copy`;
  const targetFiles = [];

  fs.mkdir(newDirPath, {recursive: true}, (err) => {
      if (err) return console.log(err);
    })

// Copy files to destination folder
  fs.readdir(targetDirPath, {withFileTypes: true}, (err, files) => {
    if (err) console.log(err);
    files.forEach((file) => {
      if (file.isFile()) {
        let newFile = path.join(newDirPath, file.name)
        let targetFile = path.join(targetDirPath, file.name)
        fs.copyFile(targetFile, newFile, (err) => {
          if (err) console.log(err);
        })
        targetFiles.push(file.name);
      }
    })
// Check destination folder extra files (that targetDir doesn't have)
    fs.readdir(newDirPath, (err, copyFiles) => {
      if (err) console.log(err);

      copyFiles.forEach((item) => {
        if (!targetFiles.includes(item)) {
          let extraFile = path.join(newDirPath, item)
          fs.unlink(extraFile, (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
      })
    })
  })
}

copyDir('files');