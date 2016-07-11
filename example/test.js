let findMinCut = require('../src/min-cut.es6');

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

console.log('Minimum cut equals : ', minCutInGraph);
