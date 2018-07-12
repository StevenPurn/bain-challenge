# Company Data Miner

A CLI for querying a JSON file with data pertaining to various companies. I wrote this project in JavaScript because of the ease of dealing with JSON data and it was my understanding that JS is the most commonly used language at Bain. I tried to keep all of the functionality of the app simple and self contained to maintain readability without sacrificing modularity.  I also wanted to make sure that the user received informative feedback while using the program so I provided detailed errors when something did not work as expected. In writing this code, I assumed that all JSON data that would be injected would have the same shape and properties as the example data. I also assumed, based on the examples given in the prompt, that a single query was sufficient and the app could stop listening for input after it had completed the query. 

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

To run the tests:

```sh
npm test
```

To run a query:

```sh
node index.js [JSON filepath] [query type] [value]
```
note: valid query terms & values can be found in the constants.js file

## Requirements

- Jest
- FS

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```
