import React, { Fragment, useState, useEffect } from 'react';
import { useTokenId } from '../providers/TokenIdContext';
import { useIsCurrentPatron } from '../providers/Hooks';
import UpdateModal from './UpdateModal';
import BuyModal from './BuyModal';
import pin from "../img/pin.svg"

export default ({ displayWeb3Actions }) => {
  const tokenId = useTokenId()
  const isCurrentPatron = useIsCurrentPatron(tokenId)

  return <Fragment>
    <div className='image-container'>
      <p>plot</p>
      <img width="30px" src={pin} />
      {!!displayWeb3Actions && (
        <div className='interaction-button-container'>
          <div className='interaction-buttons'>
            {isCurrentPatron ? (
              <div>
                <Fragment>
                  <p>You own this token</p>
                  <UpdateModal />
                  {/* <TokenOverview /> */}
                </Fragment>
              </div>
            ) : (
                <div>
                  <p>You DON'T own this token</p>
                  <BuyModal />
                  {/* <BuyModal />
                    <TokenOverview /> */}
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  </Fragment>
}
