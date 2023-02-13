import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import Web3 from 'web3'
import { Web3ReactProvider } from '@web3-react/core'
import { MetaMaskProvider } from './hooks/metamask'

function getLibrary(provider, connector) {
  return new Web3(provider)
}

export default function Index({ alert = 1, setActive }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetaMaskProvider>
        <App
          alert={alert}
          setActive={setActive}
        />
      </MetaMaskProvider>
    </Web3ReactProvider>
  )
}
