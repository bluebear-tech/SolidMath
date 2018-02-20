const SolidMath = artifacts.require("SolidMath.sol");

contract('SolidMath', async (accounts) => {

  before(async () => {
    library = await SolidMath.deployed();
  });

  it("calculates binomial coefficients", async () => {
    result = await library.binomialCoefficient.call(360, 0);
    assert.equal(result, 1, "Coefficient calculated incorreclty.");

    result = await library.binomialCoefficient.call(360, 1);
    assert.equal(result, 360, "Coefficient calculated incorreclty.");

    result = await library.binomialCoefficient.call(360, 2);
    assert.equal(result, 64620, "Coefficient calculated incorreclty.");

    // NOTE: ULTRA LARGE NUMBER -> Should throw error
    // result = await library.binomialCoefficient.call(360, 359);
    // assert.equal(result, ?, "Coefficient calculated incorreclty.");

    // NOTE: NEGATIVE NUMBER -> Should throw error
    // result = await library.binomialCoefficient.call(360, -1);
    // assert.equal(result, ?, "Coefficient calculated incorreclty.");
  });

  it("adds two fractions and returns a fraction", async () => {
    result = await library.fractionAddition.call([2,3], [1,2]);
    assert.equal(result[0].toNumber(), 7, "Numerator calculated incorreclty.");
    assert.equal(result[1].toNumber(), 6, "Denominator calculated incorreclty.");

    // NOTE: LARGE NUMBERS -> Should throw error
    // result = await library.fractionAddition.call([2**240,3], [2**240,2]);
    // assert.equal(result[0].toNumber(), 7, "Numerator calculated incorreclty.");
    // assert.equal(result[1].toNumber(), 6, "Denominator calculated incorreclty.");
  });

});
