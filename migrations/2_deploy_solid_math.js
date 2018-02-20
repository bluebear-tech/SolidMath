const SolidMath = artifacts.require("./SolidMath.sol");

module.exports = function(deployer) {
  deployer.deploy(SolidMath);
};
