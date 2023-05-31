// O(n), n: number of digits in x
int reverse(int x){
  int finalValue = 0;
  while (x != 0) {
    if (finalValue > INT_MAX/10 || finalValue < INT_MIN/10)
      return 0;
    finalValue = (finalValue * 10) + (x % 10);
    x = x/10;
  }
  return finalValue;
}