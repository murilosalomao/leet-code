/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1 || s.length == 1 || s.length == 2) return s;

    const winSize = (numRows * 2) - 2;
    const resp = [];

    for (let i=0; i<numRows; i++) {
        resp.push('');
    }

    for (let i=0; i<s.length; i++) {
        let index = i % winSize;

        if (winSize > 2 && index >= numRows) {
            index = winSize - index;
        }

        resp[index] += s[i];
    }
    
    return resp.reduce((acc, cv) => acc += cv,'');
};
