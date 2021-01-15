//const HDWallet = require("@truffle/hdwallet-provider");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "7003b2580d3f47edaabc02e21281bae9";
const infuraKeyRinkeby = "15f0760286e84e8f8dece01ee81b42c4"

const developmentMnemonic =
  "spirit supply whale amount human item harsh scare congress discover talent hamster";
module.exports = {
  networks: {
    development: {
      
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(developmentMnemonic, `https://rinkeby.infura.io/v3/${infuraKeyRinkeby}`),
      network_id: 4,       // kovan
      gas: 150000, 
      gasPrice: 50000,       //
      confirmations: 0,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 50,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: false     // Skip dry run before migrations? (default: false for public nets )
    },
    kovan: {
      provider: () => new HDWalletProvider(developmentMnemonic, `https://kovan.infura.io/v3/${infuraKey}`),
      network_id: 42,       // kovan's ID
      gas: 4500000, 
      gasPrice: 100000,       //
      confirmations: 0,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 50,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }
  },
  compilers: {
    solc: {
      version: "^0.4.23",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};