// O(n*m*logm)
var groupAnagrams = function (strs) {
  /*
   * n: size of strs, m: each string length
   * map: O(n)
   * for each of the n str:
   *  - split: O(m)
   *  - sort: O(m*logm)
   *  - join: O(m)
   *
   * total:  O(n + n*(m*logm)) => O(n*m*logm)
   */
  const sorted = strs.map((str) => str.split("").sort().join(""));

  // O(n)
  const hash = {};
  for (let i = 0; i < strs.length; i++) {
    if (!hash[sorted[i]]) hash[sorted[i]] = [];
    hash[sorted[i]].push(i);
  }

  // O(n)
  const respMatrix = [];
  let i = 0;
  Object.values(hash).forEach((indices) => {
    respMatrix[i] = [];
    indices.forEach((index) => {
      respMatrix[i].push(strs[index]);
    });
    i++;
  });

  return respMatrix;
};

// example
// strs:       ["eat", "tea", "tan", "ate", "nat", "bat"]
// sorted:     ["aet", "aet", "ant", "aet", "ant", "abt"];
// hash:       { aet: [ 0, 1, 3 ], ant: [ 2, 4 ], abt: [ 5 ] }
// respMatrix: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
