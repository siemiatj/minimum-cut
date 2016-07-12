## What

Given an array of vertices and an array of edges of a connected graph this package computes the minimum cut using [Karger's algorithm](https://en.wikipedia.org/wiki/Karger%27s_algorithm).

## Installation

Install the module using `npm`:

```bash
npm install minimum-cut
```

## Usage

Import `minimum-cut` in your code and provide two arrays :
- one for edges
- second for vertices

As a result you will receive the amount of edges left after contracting vertices. To get the best results this algorithm should be run multpile times and the smallest returned length should be used.


## Example

Check the `example` folder or use this code as a starting point :

```
import findMinimumCut from 'minimum-cut';
// or var findMinimumCut = require('minimum-cut').default;

let verticesArray = [ '1', '2', '3', '4', '5', '6', '7', '8' ]
let edgesArray = [ 
  [ '1', '2' ],
  [ '1', '3' ],
  [ '1', '4' ],
  [ '1', '7' ],
  [ '2', '3' ],
  [ '2', '4' ],
  [ '3', '4' ],
  [ '4', '5' ],
  [ '5', '6' ],
  [ '5', '7' ],
  [ '5', '8' ],
  [ '6', '7' ],
  [ '6', '8' ],
  [ '7', '8' ]
];

let minCutInGraph = findMinCut(verticesArray, edgesArray);

```


## Building

To build the project from source run:

```bash
npm install && gulp
```


## Testing

To test the project run:

```bash
gulp test
```
