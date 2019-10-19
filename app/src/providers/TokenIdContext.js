import React, { createContext, useContext, useState, useEffect } from 'react'

export const TokenIdContext = createContext('')

export const TokenIdProvider = ({ children, tokenId }) => {
  return <TokenIdContext.Provider value={tokenId}>
    {children}
  </TokenIdContext.Provider>
}

export const useTokenId = () => useContext(TokenIdContext)

export const connectTokenId = (WrappedComponent) => {
  return (props) => {
    const tokenId = useTokenId()
    const newProps = { ...props, tokenId }
    return <WrappedComponent {...newProps} />
  }
}

export default TokenIdProvider
