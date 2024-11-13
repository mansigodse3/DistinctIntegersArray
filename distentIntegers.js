function distentIntegers(...arrays) {
  const combined = [].concat(...arrays);
  const countMap = new Map();
  combined.forEach(num => {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  })
  const result = [...countMap.entries()]
  .filter(([num, count]) => count === 1)
  .map (([num, count]) =>num);
  
  return result;
}

const arrays = [[1,2,3],[2,3,4],[3,4,5]];
console.log(distentIntegers(...arrays));

//output: [1,5]
