// O(logn)
var nextGreatestLetter = function (letters, target) {
  const MAX_CHAR = "{";
  const character = find(letters, 0, letters.length - 1, target, MAX_CHAR);
  return character == MAX_CHAR ? letters[0] : character;
};

var find = function (letters, start, end, target, minLetter) {
  const middle = parseInt((end + start) / 2);
  if (letters[middle] > target && letters[middle] < minLetter)
    minLetter = letters[middle];
  if (letters[middle] > target && start < middle)
    return find(letters, start, middle - 1, target, minLetter);
  if (letters[middle] <= target && end > middle)
    return find(letters, middle + 1, end, target, minLetter);
  return minLetter;
};
