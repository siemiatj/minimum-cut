/*eslint no-console: ["error", { allow: ["log"] }] */

var findMinCut = require('../dist/min-cut').default;
var verticesArray = ['1', '2', '3', '4', '5', '6', '7', '8'];
var edgesArray = [ 
  ['1', '2'],
  ['1', '3'],
  ['1', '4'],
  ['1', '7'],
  ['2', '3'],
  ['2', '4'],
  ['3', '4'],
  ['4', '5'],
  ['5', '6'],
  ['5', '7'],
  ['5', '8'],
  ['6', '7'],
  ['6', '8'],
  ['7', '8']
];

var minCutInGraph = findMinCut(verticesArray, edgesArray);

console.log('Minimum cut equals : ', minCutInGraph);
