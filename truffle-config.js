var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'to be replaced with actual MNEMONIC';


module.exports = {
  solc: {
    settings: {
      optimizer: {
        enabled: true,
        runs: 1500
      }
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/{infura_project_id}") //to be replaced
      },
      network_id: 3,
      //BlockLimit: 77000, 
      gas: 4612388 
    }
  },
  compilers: {
    solc: {
      version: "0.8.14"
    }
  }
};