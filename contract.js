const path = require("path");
const fs = require("fs");
const solc = require("solc");

const builtPath = path.resolve(__dirname, 'build');
//fs.removeSync(builtPath);

const lotteryPath = path.resolve(__dirname, "contracts", "LotteryApplication.sol");
const source = fs.readFileSync(lotteryPath, "utf8");

var input = {
    language: 'Solidity',
    sources: {
        'lotteryPath' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}; 
var output = solc.compile(input);
//fs.ensureDirSync(builtPath);
console.log(output);

module.exports = {
  interface: output.contracts[[lotteryPath]]["LotteryApplication"].abi,
  bytecode: output.contracts[[lotteryPath]]["LotteryApplication"].evm.bytecode.object,
};
//module.exports = solc.compile(source, 1).contracts[":LotteryApplication"];