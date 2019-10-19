const path = require("path");
const HDWalletProvider = require('truffle-hdwallet-provider');
const {
  mnemonic,
  mainnetProviderUrl,
  rinkebyProviderUrl,
  goerliProviderUrl,
} = require("./secretsManager.js")

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    mainnet: {
      network_id: 1,
      provider: new HDWalletProvider(mnemonic, mainnetProviderUrl, 0),
      gas: 4700000,
      gasPrice: 10000000000, // 10 gwei
      skipDryRun: true,
    },
    rinkeby: {
      network_id: 4,
      provider: new HDWalletProvider(mnemonic, rinkebyProviderUrl, 0),
      gas: 4700000,
      gasPrice: 10000000000, // 10 gwe
      skipDryRun: true,
    },
    goerli: {
      network_id: 5,
      provider: new HDWalletProvider(mnemonic, goerliProviderUrl, 0),
      // gas: 47000000,
      gasPrice: 10000000000, // 10 gwei
      skipDryRun: true,
    },
    develop: {
      host: "localhost",
      network_id: "*",
      port: 8545
    },
    test: {
      host: "localhost",
      network_id: "*",
      port: 8545
    }
  }
};
