const ERC721Patronage_v0 = artifacts.require("ERC721Patronage_v0");
const ERC20PatronageReceipt_v0 = artifacts.require("ERC20PatronageReceipt_v0");
const CarbonCreditSteward_v0 = artifacts.require("CarbonCreditSteward_v0");
const CSCFactory = artifacts.require("CSCFactory");
const CSCRegistry = artifacts.require("CSCRegistry");

const patronageNumerator = 2400000000000
const patronageDenominator = 1000000000000
const tokensPerSecond = 317097919838

// const image1MetadataJson = {
//   location: "0x"
// }
// const image1MetadataString = JSON.stringify(image1MetadataJson)
// const image2MetadataJson = {
//   location: "abc"
// }
// const image2MetadataString = JSON.stringify(image2MetadataJson)
const generateMetaDataString = (csc, id, geoHash) => {
  return JSON.stringify({
    csc,
    plotType: "spekboom",
    geoHash,
    tokenId: id
  })
}

module.exports = function (deployer, networkName, accounts) {
  deployer.then(async () => {
    // Don't try to deploy/migrate the contracts for tests
    if (networkName === 'test') {
      return
    }

    const patronageToken = await ERC721Patronage_v0.deployed()
    const steward = await CarbonCreditSteward_v0.deployed()

    const deployedCscRegistry = await deployer.deploy(CSCRegistry)
    const deployedCscFactory = await deployer.deploy(CSCFactory, deployedCscRegistry.address)
    const geoHashes = ["0x1234",
      "0x1235",
      "0x1236",
      "0x1237",
      "0x1238",
      "0x1239",
      "0x123a",
      "0x123b",
      "0x123c"]
    const deployPlotCSCs = await Promise.all(geoHashes.map(geohash => deployedCscFactory.deploy(geohash)));

    // console.log(JSON.stringify(deployPlot1.logs, null, 2))
    // console.log(deployPlot1.logs[0].args._csc)

    // const factory = await CSCFactory.deployed()

    // console.log(await patronageToken.isMinter.call(accounts[0]))
    const cscList = deployPlotCSCs.map(result => result.logs[0].args._csc)
    await Promise.all(
      cscList.map((csc, i) =>
        patronageToken.mintWithTokenURI(steward.address, i, generateMetaDataString(csc, i, geoHashes[i]), { from: accounts[0] }),
      )
    )
    // console.log(ERC20PatronageReceipt_v0.address)
    // await steward.initialize(patronageToken.address, accounts[0], patronageDenominator, ERC20PatronageReceipt_v0.address, { from: accounts[0] })
    // await steward.listNewTokens(
    //   [0, 1, 2, 3, 4, 5, 6, 7, 8],
    //   [accounts[0], accounts[0], accounts[0], accounts[0], accounts[0], accounts[0], accounts[0], accounts[0], accounts[0]],
    //   [patronageNumerator, patronageNumerator, patronageNumerator, patronageNumerator, patronageNumerator, patronageNumerator, patronageNumerator, patronageNumerator, patronageNumerator],
    //   [tokensPerSecond, tokensPerSecond, tokensPerSecond, tokensPerSecond, tokensPerSecond, tokensPerSecond, tokensPerSecond, tokensPerSecond, tokensPerSecond],
    //   { from: accounts[0] }
    // )
  })
}
