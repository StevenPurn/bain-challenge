let { isInputValid, printResults, parseInput } = require('./index');

global.console = {
  log: jest.fn()
}

describe('Identifying valid Input', () => {
  test('should identify whether input is valid', () => {
    expect(isInputValid('invalid_search', '1999')).toEqual(false);
    expect(isInputValid('find_before', '1999')).toEqual(true);
    expect(isInputValid('find_before', 1999)).toEqual(true);
    expect(isInputValid('find_companies_between_size', 'hello')).toEqual(false);
    expect(isInputValid('find_companies_between_size', '1-10')).toEqual(true);
    expect(isInputValid('find_type', 1999)).toEqual(false);
    expect(isInputValid('find_type', 'energy')).toEqual(false);
    expect(isInputValid('find_type', 'Energy')).toEqual(true);
    expect(isInputValid('locate', 1999)).toEqual(false);
    expect(isInputValid('locate', 'WA')).toEqual(true);
  });
});

describe('Printing Results', () => {
  afterEach(() => {
    global.console.log.mockClear();
  });

  test('should print the name of a single result', () => {
    printResults('test, ', 1);
    expect(global.console.log.mock.calls).toEqual([
      ['Company Names:'],
      ['test\n'],
      ['Number of Companies: 1']
    ]);
  });

  test('should print the name of multiple results', () => {
    printResults('test1, test2, test3, ', 3);
    expect(global.console.log.mock.calls).toEqual([
      ['Company Names:'],
      ['test1, test2, test3\n'],
      ['Number of Companies: 3']
    ]);
  });

  test('should print a notice that no results were found', () => {
    printResults('test1, test2, test3, ', 0);
    expect(global.console.log.mock.calls).toEqual([
      ['No results found, try refining your search']
    ]);
  });
});

describe('Parsing Input & Finding Results', () => {
  afterEach(() => {
    global.console.log.mockClear();
  });

  test('should display results for valid input for find_after', () => {
    parseInput('find_after', '1999');
    expect(global.console.log.mock.calls).toEqual([
      ['Company Names:'],
      ['3 Round Stones, Inc., 48 Factoring Inc., 5PSolutions\n'],
      ['Number of Companies: 3']
    ]);
  });

  test('should display results for valid input for find_before', () => {
    parseInput('find_before', '2007');
    expect(global.console.log.mock.calls).toEqual([
      ['Company Names:'],
      ['5PSolutions, Abt Associates\n'],
      ['Number of Companies: 2']
    ]);
  });

  test('should display results for valid input for find_companies_between_size', () => {
    parseInput('find_companies_between_size', '1-10');
    expect(global.console.log.mock.calls).toEqual([
      ['Company Names:'],
      ['3 Round Stones, Inc., 5PSolutions\n'],
      ['Number of Companies: 2']
    ]);
  });

  test('should display results for valid input for locate', () => {
    parseInput('locate', 'VA');
    expect(global.console.log.mock.calls).toEqual([
      ['Company Names:'],
      ['5PSolutions\n'],
      ['Number of Companies: 1']
    ]);
  });

  test('should display results for valid input for find_type', () => {
    parseInput('find_type', 'Data/Technology');
    expect(global.console.log.mock.calls).toEqual([
      ['Company Names:'],
      ['3 Round Stones, Inc., 5PSolutions\n'],
      ['Number of Companies: 2']
    ]);
  });

});
