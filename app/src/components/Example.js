import React from "react";
import {
  useCurrentUser,
  useTotalPatronageForTokenWei,
  useTotalPatronageForTokenEth,
  useUsdEthPrice,
  useTotalPatronageForTokenUsd,
  useDepositAbleToWithdrawWei,
  useDepositAbleToWithdrawEth,
  useDepositAbleToWithdrawUsd,
  useForeclosureTimePatron,
  useCurrentPriceWei,
  useCurrentPriceEth,
  useCurrentPriceUsd,
  useCurrentPatron,
} from '../providers/Hooks'

export default () => {
  const currentUser = useCurrentUser()

  const usdEthPrice = useUsdEthPrice()

  const totalRaisedToken0 = useTotalPatronageForTokenWei(0)
  const totalRaisedToken1 = useTotalPatronageForTokenWei(1)
  const totalRaisedToken2 = useTotalPatronageForTokenWei(2)
  const totalRaisedToken0Eth = useTotalPatronageForTokenEth(0)
  const totalRaisedToken1Eth = useTotalPatronageForTokenEth(1)
  const totalRaisedToken2Eth = useTotalPatronageForTokenEth(2)
  const totalRaisedToken0Usd = useTotalPatronageForTokenUsd(0)
  const totalRaisedToken1Usd = useTotalPatronageForTokenUsd(1)
  const totalRaisedToken2Usd = useTotalPatronageForTokenUsd(2)

  // const depositAbleToWithdraw = useDepositAbleToWithdrawWei(currentUser)
  // const depositAbleToWithdrawEth = useDepositAbleToWithdrawEth(currentUser)
  // const depositAbleToWithdrawUsd = useDepositAbleToWithdrawUsd(currentUser)

  const currentPrice0 = useCurrentPriceWei(0)
  const currentPrice1 = useCurrentPriceWei(1)
  const currentPrice2 = useCurrentPriceWei(2)
  const currentPrice0Eth = useCurrentPriceEth(0)
  const currentPrice1Eth = useCurrentPriceEth(1)
  const currentPrice2Eth = useCurrentPriceEth(2)
  const currentPrice0Usd = useCurrentPriceUsd(0)
  const currentPrice1Usd = useCurrentPriceUsd(1)
  const currentPrice2Usd = useCurrentPriceUsd(2)

  const foreclosureTime0 = useForeclosureTimePatron(0)
  const foreclosureTime1 = useForeclosureTimePatron(1)
  const foreclosureTime2 = useForeclosureTimePatron(2)

  const currentPatron0 = useCurrentPatron(0)
  const currentPatron1 = useCurrentPatron(1)
  const currentPatron2 = useCurrentPatron(2)

  console.log('re-render', currentUser, usdEthPrice)

  return <div style={{ color: 'white', backgroundColor: 'black' }}>

    <p>Current user: {currentUser}</p>

    <p>Etherem/Usd price: {usdEthPrice} USD/ETH</p>

    <p>Spekboom Plot 1 has raised: {totalRaisedToken0} WEI</p>
    <p>Spekboom Plot 2 has raised: {totalRaisedToken1} WEI</p>
    <p>Spekboom Plot 3 has raised: {totalRaisedToken2} WEI</p>
    <p>Spekboom Plot 1 has raised: {totalRaisedToken0Eth} ETH</p>
    <p>Spekboom Plot 2 has raised: {totalRaisedToken1Eth} ETH</p>
    <p>Spekboom Plot 3 has raised: {totalRaisedToken2Eth} ETH</p>
    <p>Spekboom Plot 1 has raised: {totalRaisedToken0Usd} USD</p>
    <p>Spekboom Plot 2 has raised: {totalRaisedToken1Usd} USD</p>
    <p>Spekboom Plot 3 has raised: {totalRaisedToken2Usd} USD</p>

    {/* <p>Spekboom Plot 1 has deposit available: {depositAbleToWithdraw} WEI</p>
    <p>Spekboom Plot 1 has deposit available: {depositAbleToWithdrawEth} ETH</p>
    <p>Spekboom Plot 3 has deposit available: {depositAbleToWithdrawUsd} USD</p> */}

    <p>Spekboom Plot 1 has current price: {currentPrice0} WEI</p>
    <p>Spekboom Plot 2 has current price: {currentPrice1} WEI</p>
    <p>Spekboom Plot 3 has current price: {currentPrice2} WEI</p>
    <p>Spekboom Plot 1 has current price: {currentPrice0Eth} ETH</p>
    <p>Spekboom Plot 2 has current price: {currentPrice1Eth} ETH</p>
    <p>Spekboom Plot 3 has current price: {currentPrice2Eth} ETH</p>
    <p>Spekboom Plot 1 has current price: {currentPrice0Usd} USD</p>
    <p>Spekboom Plot 2 has current price: {currentPrice1Usd} USD</p>
    <p>Spekboom Plot 3 has current price: {currentPrice2Usd} USD</p>


    {(!!foreclosureTime0) && <p>Foreclosure time: {foreclosureTime0.format()}</p>}
    {(!!foreclosureTime1) && <p>Foreclosure time: {foreclosureTime1.format()}</p>}
    {(!!foreclosureTime2) && <p>Foreclosure time: {foreclosureTime2.format()}</p>}

    <p>Spekboom Plot 1 current patron: {currentPatron0}</p>
    <p>Spekboom Plot 2 current patron: {currentPatron1}</p>
    <p>Spekboom Plot 3 current patron: {currentPatron2}</p>
  </div>
}

