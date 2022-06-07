var LotteryDapp = artifacts.require("LotteryApplication.sol");
module.exports = function(deployer) {
    deployer.deploy(LotteryDapp);
    // Additional contracts can be deployed here
};