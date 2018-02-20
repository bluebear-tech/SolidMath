pragma solidity ^0.4.19;

import "zeppelin-solidity/contracts/math/SafeMath.sol";

contract SolidMath {

  using SafeMath for uint;

  // BINOMIAL COEFFICIENT
  // https://en.wikipedia.org/wiki/Binomial_coefficient

  // EXAMPLE:

  //     10!        10 * 9
  // ----------- = --------  => n = 10; k = 2, start = 9
  // (10 - 2)!2!       2


  // TODO: Create concept of "multipliable" -> Can two numbers safely be multiplied
  //       without being > 2**256?

  function binomialCoefficient(uint n, uint k) public pure returns (uint) {
    require(n >= 0 && k >= 0);
    if (k == 0) {
      return 1;
    } else {
      // Initialize variables
      uint numerator = 1;
      uint denominator = 1;
      uint start = n.sub((k.sub(1)));
      // Multiply numbers from start up to n together
      for (uint i = start; i <= n; i++) {
        numerator = numerator.mul(i);
      }
      // Multiply numbers from 1 up to k together
      for (uint j = 1; j <= k; j++) {
        denominator = denominator.mul(j);
      }
      return numerator.div(denominator);
    }
  }

  function fractionAddition(uint[2] a, uint[2] b) public pure returns (uint[2] result) {
    result[0] = (a[0].mul(b[1])).add(a[1].mul(b[0]));
    result[1] = a[1].mul(b[1]);

    return result;
  }
}
