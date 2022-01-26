function makeGraph(StringArr) {
  const graph = {};
  StringArr.forEach((str) => {
    const [start, end] = str.split(' ');
    graph[end] = graph[end] ? [...graph[end], start] : [start]
  });
  return graph;
}

function count(arr) {
  const result = {};
  arr.forEach((x) => { 
    result[x] = (result[x] || 0)+1; 
  });
  return result;
}

const transpose = matrix => matrix.reduce(
  (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
  []
);
