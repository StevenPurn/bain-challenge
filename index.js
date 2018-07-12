const { types, states, sizes, inputToProperty } = require('./constants');
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
        parseInput(search, value);
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
};

const parseInput = (search, value) => {
  const greaterThan = search === 'find_after';
  findResults(inputToProperty[search], value, greaterThan);
};

const findResults = (property, value, greaterThan) => {
  let results = '';
  let count = 0;

  const addResult = (company) => {
    results += company.company_name + ', ';
    count += 1;
  };

  data.forEach((company) => {
    if (property === 'year_founded') {
      if (greaterThan) {
        if (company[property] >= value) {
          addResult(company);
        }
      } else {
        if (company[property] <= value) {
          addResult(company);
        }
      }
    } else if (company[property] === value) {
      addResult(company);
    }
  });
  printResults(results, count);
};

const printResults = (results, count) => {
  if (count > 0) {
    console.log('Company Names:');
    console.log(results.slice(0, -2) + '\n');
    console.log('Number of Companies:' + count);
  } else {
    console.log('No results found, try refining your search');
  }
};

module.exports = {
  printResults,
  findResults,
  parseInput,
  isInputValid,
};
