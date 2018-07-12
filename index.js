const { types, states, sizes } = require('constants');
const { readFile } = require('fs');
let data;

if (process.argv[2]) {
  readFile(process.argv[2], 'utf8', (err, fileContents) => {
    if (err) {
      console.log('Unable to read file:');
      console.log(err);
    } else {
      data = JSON.parse(fileContents);
      const search = process.argv[3];
      const value = process.argv[4];
      if (isInputValid(search, value)) {
        console.log('Input is valid');
      } else {
        console.log('Invalid input, please check your syntax');
      }
    }
  });
}

const isInputValid = (search, value) => {
  switch(search) {
    case 'find_after':
    case 'find_before':
      return !isNaN(value);
    case 'find_type':
      return types.includes(value);
    case 'locate':
      return states.includes(value);
    case 'find_companies_between_size':
      return sizes.includes(value);
    default:
      return false;
  }
}
