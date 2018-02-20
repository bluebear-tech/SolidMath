pragma solidity ^0.4.19;

contract SolidMath {

  // BINOMIAL COEFFICIENT
  // https://en.wikipedia.org/wiki/Binomial_coefficient
  /*

    EXAMPLE:

        10!        10 * 9
    ----------- = --------  => n = 10; k = 2, start = 9
    (10 - 2)!2!       2

  */
  function binomialCoefficient(uint n, uint k) public pure returns (uint) {
    if (k == 0) {
      return 1;
    } else {
      // Initialize variables
      uint numerator = 1;
      uint denominator = 1;
      uint start = n - (k - 1);

      // Multiply numbers from start up to n together
      for (uint i = start; i <= n; i++) {
        numerator *= i;
      }

      // Multiply numbers from 1 up to k together
      for (uint j = 1; j <= k; j++) {
        denominator *= j;
      }

      return numerator / denominator;
    }
  }

}
