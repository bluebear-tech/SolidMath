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
  });

});
