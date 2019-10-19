import React, { useState } from 'react'
import { Button, Box, Input } from 'rimble-ui'
import BN from 'bn.js'
import { useCurrentPriceWei, useBuyTransaction } from '../providers/Hooks'
import { useTokenId } from '../providers/TokenIdContext'
import TxTemplate from './common/TxTemplate'
import ModalTemplate from './common/ModalTemplate'
import Web3 from 'web3'

export default () => {
  const [showModal, setModalState] = useState(false)
  const [priceInput, setPriceInput] = useState(0)
  const [depositInput, setDepositInput] = useState(0)
  const tokenId = useTokenId()
  const currentPrice = useCurrentPriceWei(tokenId)
  const { send: buy, TXObjects: buyTxObjects } = useBuyTransaction()

  return <React.Fragment>
    <Button style={{ width: '100%' }} mainColor='#7A7A7A' size='small' onClick={() => setModalState(true)} > Buy </Button>

    <ModalTemplate
      isOpen={showModal}
      onClose={() => setModalState(false)}
    >
      <TxTemplate txObjects={buyTxObjects}>
        <Box p={4} mb={3}>
          <p>New selling price:</p>
          <Input
            type='number'
            value={priceInput}
            placeholder={`Price`}
            onChange={event => {
              const newPriceFloat = parseFloat(event.target.value) // convert to float for safety
              const newPrice = isNaN(newPriceFloat) || (newPriceFloat < 0) ? priceInput : newPriceFloat // make sure value is positive and valid
              setPriceInput(newPrice)
            }}
            style={{ width: '100%' }}
          />
          <p>Deposit:</p>
          <Input
            type='number'
            value={depositInput}
            placeholder={`Deposit`}
            onChange={event => {
              const newDepositFloat = parseFloat(event.target.value) // convert to float for safety
              const newDeposit = isNaN(newDepositFloat) || (newDepositFloat < 0) ? depositInput : newDepositFloat // make sure value is positive and valid
              setDepositInput(newDeposit)
            }}
            style={{ width: '100%' }}
          />
          <br />
          <Button
            mainColor='#7A7A7A' size="small"
            ml={3}
            onClick={() => {
              const depositAmount = Web3.utils.toWei(depositInput.toString(), 'ether') // convert value to WEI
              const transactionAmount = new BN(depositAmount).add(new BN(currentPrice)) // Get transaction Value (deposit + current price)
              const newPrice = Web3.utils.toWei(priceInput.toString(), 'ether') // convert value to WEI
              buy(tokenId, newPrice, { value: transactionAmount })
            }}
          >Buy</Button>
        </Box>
      </TxTemplate>
    </ModalTemplate>
  </React.Fragment >
}
