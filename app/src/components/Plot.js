import React, { Fragment, useState, useEffect } from 'react';
import { useTokenId } from '../providers/TokenIdContext';
import {
  useIsCurrentPatron, useTotalPatronageForTokenEth, useTotalPatronageForTokenUsd, useCurrentPriceEth, useCurrentPriceUsd,
  useCarbonCreditsOwedEth,
  useCarbonTokensGeneratedEth,
  useForeclosureTimePatron,
  // useGetVerifications,
  useCurrentUser
} from '../providers/Hooks';
import UpdateModal from './UpdateModal';
import ChangeDeposit from './ChangeDeposit';
import BuyModal from './BuyModal';
import pin from "../img/pin.svg"

export default ({ isProviderSelected }) => {
  const tokenId = useTokenId()
  const isCurrentPatron = useIsCurrentPatron(tokenId)
  const currentPatron = useCurrentUser()
  const totalOwed = useCarbonCreditsOwedEth(tokenId, currentPatron)
  // const verifications = useGetVerifications(tokenId)

  // console.log({ verifications })
  // const totalGiven = useCarbonTokensGeneratedEth(tokenId, currentPatron)

  const [displayWeb3Actions, setDisplayWeb3Actions] = useState(false)

  // const totalRaisedToken0Eth = useTotalPatronageForTokenEth(tokenId)
  // const totalRaisedToken0Usd = useTotalPatronageForTokenUsd(tokenId)

  const currentPriceEth = useCurrentPriceEth(tokenId)
  const currentPriceUsd = useCurrentPriceUsd(tokenId)
  // const foreclosureTime = useForeclosureTimePatron(tokenId)

  const Details = () => <Fragment>
    <p>This token currently costs {(currentPriceEth | "loading").toString()} ETH <br /><small>({(currentPriceUsd | "loading").toString()} USD)</small></p>
    {/* <p><small>The deposit will run out on {foreclosureTime.toString()}</small></p> */}
    {/* <p>You have been PAID {totalGiven.toString()} carbon credits.</p> */}
    <p>You have are OWED {totalOwed.toString()} carbon credits.</p>
    {/* 
    <p>This token is verified by {totalOwed.toString()} carbon credits.</p>
    <p>You have are OWED {totalOwed.toString()} carbon credits.</p>
    <p>You have are OWED {totalOwed.toString()} carbon credits.</p> */}
  </Fragment >

  return <Fragment>
    <div id={`image-${tokenId}`} className='image-container'>
      <img onClick={() => setDisplayWeb3Actions(!displayWeb3Actions)} width="70px" src={pin} />
      {!!displayWeb3Actions && (
        isProviderSelected ? <div className='interaction-button-container'>
          <div className='interaction-buttons'>
            {isCurrentPatron ? (
              <div>
                <Fragment>
                  <p>This plot is owned by you</p>
                  <Details />
                  <UpdateModal />
                  <ChangeDeposit />
                </Fragment>
              </div>
            ) : (
                <div>
                  <p>You DON'T own this Plot</p>
                  <Details />
                  <BuyModal />
                </div>
              )}
          </div>
        </div>
          :
          <div className='interaction-button-container'>
            <p>You need to connect with Web3 to access this functionality.</p>
          </div>
      )}
    </div>
  </Fragment>
}
