#!/usr/bin/env node
/*eslint no-console: ["error", { allow: ["log"] }] */
/* global process */

const fs = require('fs');
const readline = require('readline');
const path = require('path');
const Clone = require('clone');
const findMinimumCut = require('../dist/min-cut').default;
const PATHARG = process.argv[2];
const RETRIES = parseInt(process.argv[3], 10) || 10;

if (!PATHARG) {
  console.log('usage: minimum-cut [file_path] [retries]');
  process.exit(1);
}
if (!process.argv[3]) {
  console.log('Number of retries not defined. Using 10.');
}

const filePath = path.resolve(PATHARG);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});
let MIN_CUTS = null;
let verticesTmpObject = {};
let verticesArray = [];
let edgesArray = [];
let parsedLine;

lineReader.on('line', function (line) {
  /*
   * Preprocessing input data
   */
  parsedLine = line.split(/\s+/);
  let vertexNo = parsedLine.shift();
  verticesArray.push(vertexNo);
  verticesTmpObject[vertexNo] = {};

  parsedLine.forEach(l => {
    if (parseInt(l, 10)) {
      verticesTmpObject[vertexNo][l] = true;
    }
  });
}).on('close', () => {
  /*
   * Leave edges starting only from one vertex removing unnecessary duplicates
   */
  for (let n in verticesTmpObject) {
    for (let m of Object.keys(verticesTmpObject[n])) {
      edgesArray.push([n, m]);

      delete verticesTmpObject[m][n];
    }
  }
  let verticesCopy, edgesCopy, minimumCut;

  for (let i=0; i< RETRIES; i+= 1) {
    verticesCopy = verticesArray.slice(0);
    edgesCopy = Clone(edgesArray);
    minimumCut = findMinimumCut(verticesCopy, edgesCopy);

    if (MIN_CUTS === null || (minimumCut < MIN_CUTS)) {
      MIN_CUTS = minimumCut;
    }
  }

  console.log('Minimum cut number: ', MIN_CUTS);
});
