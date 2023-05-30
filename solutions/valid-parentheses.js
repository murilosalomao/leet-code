// O(n)
var isValid = function (s) {
  const hash = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (s[i] == hash[stack.slice(-1)]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length == 0;
};
