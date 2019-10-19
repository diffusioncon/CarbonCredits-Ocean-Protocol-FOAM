// Load zos scripts and truffle wrapper function
const { scripts, ConfigManager } = require('@openzeppelin/cli');
const { add, push, create } = scripts;

async function deploy(options, accounts) {
  add({
    contractsData: [
      { name: 'ERC721Patronage_v0', alias: 'ERC721Patronage' },
      { name: 'ERC721PatronageReceipt_v0', alias: 'ERC721PatronageReceipt' },
      { name: 'CarbonCreditSteward_v0', alias: 'CarbonCreditSteward' },
    ]
  });

  await push(options);

  const steward = await create(Object.assign({ contractAlias: 'CarbonCreditSteward' }, options));
  const patronageToken = await create({
    ...options,
    contractAlias: 'ERC721Patronage',
    methodName: 'setup',
    methodArgs: [
      steward.address, "CarbonCreditGenerators", "WT", accounts[0]
    ]
  });

  const patronageReceiptToken = await create({
    ...options,
    contractAlias: 'ERC721PatronageReceipt',
    methodName: 'initialize',
    methodArgs: [
      "CarbonCreditTokens", "WT", 18
    ]
  });
}

module.exports = function (deployer, networkName, accounts) {
  deployer.then(async () => {
    // Don't try to deploy/migrate the contracts for tests
    if (networkName === 'test') {
      return
    }
    const { network, txParams } = await ConfigManager.initNetworkConfiguration({ network: networkName, from: accounts[0] })
    await deploy({ network, txParams }, accounts)
  })
}
