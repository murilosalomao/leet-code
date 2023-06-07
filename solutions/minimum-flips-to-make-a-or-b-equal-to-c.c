int minFlips(int a, int b, int c) {
  int flips = 0;
  int i = 0;
  for (i = 0; i < 32; i++) {
    char bitA = (a >> i) & 1;
    char bitB = (b >> i) & 1;
    char bitC = (c >> i) & 1;
    
    if ((bitA | bitB) != bitC) {
      if (bitC == 0) {
        if (bitA == 1) flips++;
        if (bitB == 1) flips++;
      } else {
        flips++;
      }
    }
  }

  return flips;
}