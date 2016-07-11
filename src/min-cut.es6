const Rn = require('random-number');

let MIN_CUT = null;

const findMinimumCut = function(vertices, edges) {
  findMinCut(vertices, edges);

  return MIN_CUT;
}

const findMinCut = function(vertices, edges) {
  if (vertices.length === 2) {
    MIN_CUT = edges.length;
    return;
  }

  // remove edge and vertex at one end of this edge
  const removeEdge = function() {
    let m = Rn({
      min: 0,
      max: edges.length-1,
      integer: true
    });
    let edge = edges[m];
    let n1 = edge[0];
    let n2 = edge[1];

    edges.splice(m, 1);
    vertices = vertices.filter(v => {
      return v != n2;
    });

    return [n1, n2];
  };

  const contract = function(edge) {
    let n1 = edge[0];
    let n2 = edge[1];

    edges.forEach(e => {
      if (e[0] == n2) {
        e[0] = n1;
      }
      if (e[1] == n2) {
        e[1] = n1;
      }
    });
  };

  const removeLoops = function() {
    edges = edges.filter(e => {
      return (e[0] != e[1]);
    });
  };

  let edge = removeEdge();
  contract(edge);
  removeLoops();

  findMinCut(vertices, edges);
};

module.exports = findMinimumCut;