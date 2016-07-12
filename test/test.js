/* global it, describe */

var expect = require('chai').expect;
var clone = require('clone');
var findMinCut = require('../dist/min-cut').default;

describe('Minimum cut test', () => {
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

  it('returned minimum cut is a number', function () {
    var verticesCopy = verticesArray.slice(0);
    var edgesCopy = clone(edgesArray);
    var minCutInGraph = findMinCut(verticesCopy, edgesCopy);

    expect(minCutInGraph).to.be.a('number');
  });
});
