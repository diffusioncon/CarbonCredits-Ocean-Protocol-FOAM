import React, { Children } from "react"
import { useAreContractsLoaded } from "../providers/Hooks"


export default ({ AlternateLoader, children }) => {
  const {
    // vitalikStewardInitialized,
    allContractsLoaded,
    // erc721FullInitialized,
    web3Status
  } = useAreContractsLoaded()

  if (allContractsLoaded && web3Status === 'initialized') {
    return Children.only(children)
  }

  if (!!AlternateLoader) {
    return <AlternateLoader />
  }

  if (web3Status === "") {
    return (
      <div className="section">
        Initializing connection to Ethereum
      </div>
    )
  }


  return (
    <main className="container loading-screen">
      <div className="pure-g">
        <div className="pure-u-1-1">
          <h1>⚙️</h1>
          <p>Loading dapp...</p>
        </div>
      </div>
    </main>
  )
}
