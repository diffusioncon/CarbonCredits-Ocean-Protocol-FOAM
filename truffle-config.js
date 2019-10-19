const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
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
