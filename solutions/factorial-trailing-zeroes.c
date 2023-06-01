int trailingZeroes(int n){
  int factor = 5;
  int result = 0;

  while (factor <= n) {
    result += n / factor;
    factor *= 5;
  }

  return result;
}