import React, { useState } from 'react';
import { Button, Box, Input, Radio } from 'rimble-ui';
import {
  useChangePrice,
} from '../providers/Hooks';
import { useTokenId } from '../providers/TokenIdContext';
import TxTemplate from './common/TxTemplate';
import ModalTemplate from './common/ModalTemplate';
import Web3 from 'web3';

const modalStates = {
  UPDATE_PRICE: 'update-price',
  CHANGE_DEPOSIT: 'change-deposit',
};

export default () => {
  const [modalState, setModalState] = useState('');
  const [priceInput, setPriceInput] = useState(0);
  const [addDeposit, setAddDeposit] = useState(true);
  const tokenId = useTokenId();
  const {
    send: changePrice,
    TXObjects: changePriceTxObjects
  } = useChangePrice();

  return (
    <React.Fragment>
      <Button
        style={{ width: '100%' }}
        mainColor='#7A7A7A'
        size='small'
        onClick={() => setModalState(modalStates.UPDATE_PRICE)}
      >
        {' '}
        Add/Remove Deposit
      </Button>
      &ensp;
      <ModalTemplate
        isOpen={modalState === modalStates.UPDATE_PRICE}
        onClose={() => setModalState('')}
      >
        <TxTemplate txObjects={changePriceTxObjects}>
          <Box p={4} mb={3}>
            <Radio label={addDeposit ? "add deposit" : "remove deposit"} checked={addDeposit} onClick={() => setAddDeposit(!addDeposit)} />
            <Input
              type='number'
              value={priceInput}
              placeholder={`Deposit`}
              onChange={event => {
                const newPriceFloat = parseFloat(event.target.value); // convert to float for safety
                const newPrice =
                  isNaN(newPriceFloat) || newPriceFloat < 0
                    ? priceInput
                    : newPriceFloat; // make sure value is positive and valid
                setPriceInput(newPrice);
              }}
              style={{ width: '100%' }}
            />
            <br />
            <Button
              mainColor='#7A7A7A'
              size='small'
              ml={3}
              onClick={() => {
                const priceForTx = Web3.utils.toWei(
                  priceInput.toString(),
                  'ether'
                ); // convert value to WEI
                changePrice(tokenId, priceForTx);
              }}
            >
              {addDeposit ? "Add" : "Remove"}
            </Button>
          </Box>
        </TxTemplate>
      </ModalTemplate>
    </React.Fragment>
  );
};
