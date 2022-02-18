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

 const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      // 해당하는 fixed를 제외한 나머지 배열 
      const permutations = getPermutations(rest, selectNumber - 1); 
      // 나머지에 대해서 순열을 구한다.
      const attached = permutations.map((el) => [fixed, ...el]); 
      //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); 
      // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}
 
 
 const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      const combinations = getCombinations(rest, selectNumber - 1); 
      const attached = combinations.map((el) => [fixed, ...el]);
      results.push(...attached); 
    });                                    
    return results; 
  }
 
 function getCombination(arr, len = arr.length) {
  if (len === 1) return arr.map(el => [el]);

  const combis = [];

  arr.forEach((curr, idx) => {
    const smallerCombis = getCombination(arr.slice(idx + 1), len - 1);

    smallerCombis.forEach((smallerCombi) => {
      combis.push([curr, ...smallerCombi]);
    });

  });

  return combis;
}

function isPrimeNum(num) {
  if(num < 2) return false;
  if(num === 2) return true;
  for(let i = 2; i< Math.sqrt(num)+1; i++) {
    if(num % i === 0) return false;
  }
  return true;
}
