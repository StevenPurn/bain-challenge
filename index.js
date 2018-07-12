let data;
const { readFile } = require('fs');

if (process.argv[2]) {
  readFile(process.argv[2], 'utf8', (err, fileContents) => {
    if (err) {
      console.log('Unable to read file:');
      console.log(err);
    } else {
      data = JSON.parse(fileContents);
      const search = process.argv[3];
      const value = process.argv[4];
      console.log(data);
      console.log(search);
      console.log(value);
    }
  });
}
