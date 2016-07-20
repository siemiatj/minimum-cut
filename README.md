[![Dependencies](https://david-dm.org/siemiatj/minimum-cut.svg)](https://david-dm.org/siemiatj/minimum-cut)
[![devDependencies](https://david-dm.org/siemiatj/minimum-cut/dev-status.svg)](https://david-dm.org/siemiatj/minimum-cut#info=devDependencies&view=table)
[![NPM version](https://badge.fury.io/js/minimum-cut.svg)](https://badge.fury.io/js/minimum-cut.svg)

## What

Given an array of vertices and an array of edges of a connected graph this package computes the minimum cut using [Karger's algorithm](https://en.wikipedia.org/wiki/Karger%27s_algorithm). It was battle tested with 100k+ edges sample array from Coursera Algorithms course.

## Installation

Install the module using `npm`:

```
npm install minimum-cut --save
```

or

```
npm install minimum-cut -g
```

to install it globally and use it in the terminal.

## Usage

### Terminal
If you want to use it in the terminal, you need to provide an absolute path to a file with the following data structure :

```
1 2 3 4 7
2 1 3 4
3 1 2 4
4 1 2 3 5
5 4 6 7 8
6 5 7 8
7 1 5 6 8
8 5 6 7
```
where first column is the name of the vertex, and the second column is th adjacent edges. You can also check the attached `test_graph.txt` file in the examples folder.

Then run:

`minimum-cut <path_to_file> <number_of_retries>`

As a result you will receive the smalles amount of edges left after running the algorithm `<number_of_retries>` times.

### Code

Import `minimum-cut` in your code and provide two arrays :
- one for edges
- second for vertices


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

As a result you will receive the amount of edges left after contracting vertices. To get the best results this algorithm should be run multpile times and the smallest returned length should be used.

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
