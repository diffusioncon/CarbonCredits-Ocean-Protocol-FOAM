import React, { useState } from "react"
import Web3Connect from "web3connect"
import Plot from "./components/Plot"
import {
  useCurrentUser,
  // useTotalPatronageForTokenWei,
  // useTotalPatronageForTokenEth,
  // useUsdEthPrice,
  // useTotalPatronageForTokenUsd,
  // useDepositAbleToWithdrawWei,
  // useDepositAbleToWithdrawEth,
  // useDepositAbleToWithdrawUsd,
  // useForeclosureTime,
  // useCurrentPriceWei,
  // useCurrentPriceEth,
  // useCurrentPriceUsd,
  // useCurrentPatron,
} from './providers/Hooks'
import { useWeb3Setup } from './providers/DrizzleProvider'
import ToggleButton from 'react-toggle-button'
import TokenIdProvider from './providers/TokenIdContext'
import Example from './components/Example'

export default () => {
  const [displayWeb3Actions, setDisplayWeb3Actions] = useState(false)
  const { isProviderSelected, setProvider } = useWeb3Setup()
  const currentUser = useCurrentUser()

  return <React.Fragment >
    <div>
      <header>
        {/* <ToastContainer /> */}
        <h1>
          These ads are always for sale, purchase the ad space and set your own monthly payment...
            <br /> even make a profit when someone buys the ad space from you
            </h1>
        <React.Fragment>
          {!isProviderSelected ?
            <Web3Connect.Button
              providerOptions={{
                portis: {
                  id: '104b9d07-25d3-4aeb-903b-ad7452218d05',
                  network: "mainnet"
                },
                fortmatic: {
                  key: 'pk_live_BE64CE1BB4A49C37',
                  network: "mainnet"
                }
              }}
              onConnect={setProvider}
              onClose={() => {
                console.log("Web3Connect Modal Closed") // modal has closed
              }}
            /> :
            <React.Fragment>
              <p style={{ color: 'white' }}>You are logged in with: {currentUser}</p>
              <ToggleButton
                value={displayWeb3Actions}
                onToggle={() => setDisplayWeb3Actions(!displayWeb3Actions)} />
              <label>
                <span style={{ color: 'white' }}>Click toggle to buy ad</span>
              </label>
            </React.Fragment>
          }
        </React.Fragment>

      </header>

      <div className="Grid">
        {/* <UsdPriceProvider> */}
        {([0, 1, 2, 3, 4, 5, 6, 7, 8]).map(i => <div key={i} className="Grid-item">
          <TokenIdProvider tokenId={i}>
            <Plot displayWeb3Actions={displayWeb3Actions} />
          </TokenIdProvider>
        </div>)}
        {/* </UsdPriceProvider> */}
      </div>
      <footer>
        <div className='socials'>
          <div
            className='fb-share-button'
            data-href='http://alwaysforsale.io'
            data-layout='button'
            data-size='small'
          >
            <a
              target='_blank'
              href='https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Falwaysforsale.io%2F&ampsrc=sdkpreparse'
              className='fb-xfbml-parse-ignore'
            >
              Share
              </a>
          </div>
          <div>
            <a
              href='https://twitter.com/intent/tweet?button_hashtag=Alwaysforsale.io&ref_src=twsrc%5Etfw'
              className='twitter-hashtag-button'
              data-show-count='false'
            >
              Tweet #Alwaysforsale
              </a>
          </div>
        </div>
        <div className='more-info'>
          {/* <About /> */}
          <br />
          {/* <HowItWorks /> */}
        </div>
      </footer>
      {/* <OfflineContainer alternateLoader={React.Fragment}>
        <TotalRaised />
      </OfflineContainer> */}
    </div>
    <div style={{ overflow: 'auto', maxHeight: 200 }}>
      <Example />
    </div>
  </React.Fragment >
}

