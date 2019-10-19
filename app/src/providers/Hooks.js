import { drizzleReactHooks } from '@drizzle/react-plugin'
import BN from 'bn.js'
import { fromWei } from 'web3-utils'
import { useUsdEthPrice as useUsdEthPriceOrig } from './UsdPriceProvider'
import moment from 'moment'

const {
  useDrizzleState,
  useDrizzle,
} = drizzleReactHooks

export const useCurrentUser =
  () => {
    const state = useDrizzleState(state => state.accounts);
    return state[0];
  };

export const useUsdEthPrice = useUsdEthPriceOrig
export const useTotalPatronageForTokenWei = (tokenId) => {
  const { useCacheCall } = useDrizzle()
  // try { // TODO: should have some error handling here, but react didn't like it (no conditionals around hooks)
  const totalCollectedOpt =
    useCacheCall(['CarbonCreditSteward_v0'], call => call('CarbonCreditSteward_v0', 'totalCollected', tokenId))
  const patronageOwedOpt =
    useCacheCall(['CarbonCreditSteward_v0'], call => call('CarbonCreditSteward_v0', 'patronageOwed', tokenId))

  if (!!totalCollectedOpt && !!patronageOwedOpt) {
    return (new BN(totalCollectedOpt)).add(new BN(patronageOwedOpt)).toString()
  } else {
    return null
  }
  // } catch (e) {
  //   console.error('This is a friendly (friendlier) error message from Jason. You cannot call this function until drizzle is completely initialized and has loaded all the contracts.', e)
  // }
}

export const useTotalPatronageForTokenEth = (tokenId) => {
  const totPatranageWei = useTotalPatronageForTokenWei(tokenId)
  return (!!totPatranageWei) ? fromWei(totPatranageWei, 'ether') : null
}
export const useTotalPatronageForTokenUsd = (tokenId) => {
  const totPatranageEth = useTotalPatronageForTokenEth(tokenId)
  const usdEthPrice = useUsdEthPrice()
  return (!!totPatranageEth && !!usdEthPrice) ?
    (usdEthPrice * parseFloat(totPatranageEth)).toFixed(2)
    : null
}

export const useAreContractsLoaded = () => {
  return useDrizzleState((
    {
      web3: { status: web3Status },
      contracts: {
        CarbonCreditSteward_v0: { initialized: carbonCreditStewardInitialized },
        ERC721Patronage_v0: { initialized: erc721PatronageInitialized },
        ERC20PatronageReceipt_v0: { initialized: erc20PatronageReceiptInitialized }
      }
    }
  ) => {
    return {
      web3Status,
      erc721PatronageInitialized,
      erc20PatronageReceiptInitialized,
      carbonCreditStewardInitialized,
      allContractsLoaded: erc721PatronageInitialized &&
        erc20PatronageReceiptInitialized &&
        carbonCreditStewardInitialized
    }
  })
}

export const useDepositAbleToWithdrawWei = (userAddress) => {
  const { useCacheCall } = useDrizzle()
  // TODO: should have some error handling here, but react didn't like it (no conditionals around hooks)
  return useCacheCall(['CarbonCreditSteward_v0'], call => call('CarbonCreditSteward_v0', 'depositAbleToWithdraw', userAddress))
}

export const useDepositAbleToWithdrawEth = (userAddress) => {
  const depositToWithdraw = useDepositAbleToWithdrawWei(userAddress)
  return (!!depositToWithdraw) ? fromWei(depositToWithdraw, 'ether') : null
}

export const useDepositAbleToWithdrawUsd = (userAddress) => {
  const depositeAbleToWithdrawEth = useDepositAbleToWithdrawEth(userAddress);
  const usdEthPrice = useUsdEthPrice();
  return (!!depositeAbleToWithdrawEth && !!usdEthPrice) ?
    (usdEthPrice * parseFloat(depositeAbleToWithdrawEth)).toFixed(2)
    : null
};

// TODO: maybe using the 'moment.js' library would be beneficial here!
export const useForeclosureTime = (tokenId) => {
  const { useCacheCall } = useDrizzle()
  const foreclosureTimestamp = useCacheCall(['CarbonCreditSteward_v0'], call => call('CarbonCreditSteward_v0', 'foreclosureTime', tokenId))
  return (!!foreclosureTimestamp) ? moment(foreclosureTimestamp, 'X') : null
}

export const useCurrentPriceWei = (tokenId) => {
  const { useCacheCall } = useDrizzle()
  return useCacheCall(['CarbonCreditSteward_v0'], call => call('CarbonCreditSteward_v0', 'price', tokenId))
}
export const useCurrentPriceEth = (tokenId) => {
  const depositToWithdraw = useCurrentPriceWei(tokenId)
  return (!!depositToWithdraw) ? fromWei(depositToWithdraw, 'ether') : null
}

export const useCurrentPriceUsd = (tokenId) => {
  const currentPriceEth = useCurrentPriceEth(tokenId);
  const usdEthPrice = useUsdEthPrice();
  return (!!currentPriceEth && !!usdEthPrice) ?
    (usdEthPrice * parseFloat(currentPriceEth)).toFixed(2)
    : null
}

export const useCurrentPatron = (tokenId) => {
  const { useCacheCall } = useDrizzle()
  return useCacheCall(['ERC721Patronage_v0'], call => call('ERC721Patronage_v0', 'ownerOf', tokenId))
}

export const useIsCurrentPatron = (tokenId) => {
  const currentPatron = useCurrentPatron(tokenId)
  const currentUser = useCurrentUser()
  return !!currentPatron && !!currentUser && currentPatron.toUpperCase() === currentUser.toUpperCase()
}
// TODO: get `useTotalTimeHeld` working
// const useTotalTimeHeld = (addressOfUser) =>
//       const currentTimeHeld = parseInt(this.getTimeHeld(props, timeHeldKey)) + (parseInt(date.getTime()/1000) - parseInt(this.getTimeAcquired(props))

const useAvailableDeposit = (tokenId) => {
  const { useCacheCall } = useDrizzle()
  return useCacheCall(['CarbonCreditSteward_v0'], call => call('CarbonCreditSteward_v0', 'availableDeposit', tokenId))
}

// // const useBuyTransaction: unit => string => = (newPriceInEther: string) =>
// //   (useCacheSend())(. 'CarbonCreditSteward_v0', 'buy', newPriceInEther);
// const useBuyTransaction = () => (useCacheSend())(.'CarbonCreditSteward_v0', 'buy');
export const genericTransaction = (contractId, functionName) => tokenId => {
  const { useCacheSend } = useDrizzle()
  const { send, TXObjects } = useCacheSend(contractId, functionName)
  return { TXObjects, send }
}

export const useBuyTransaction = genericTransaction('CarbonCreditSteward_v0', 'buy')
export const useWithdrawDeposit = genericTransaction('CarbonCreditSteward_v0', 'withdrawDeposit')
export const useChangePrice = genericTransaction('CarbonCreditSteward_v0', 'changePrice')
export const useDepositWei = genericTransaction('CarbonCreditSteward_v0', 'depositWei')
export const useExit = genericTransaction('CarbonCreditSteward_v0', 'exit')
export const useTransferAssetTokenTo = genericTransaction('CarbonCreditSteward_v0', 'transferAssetTokenTo')
