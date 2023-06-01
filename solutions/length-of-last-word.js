var lengthOfLastWord = function (s) {
  s = s.trim();
  return s.substring(s.lastIndexOf(" ") + 1).length;
};
