import Dashboard from '../src/dashboard/Dashboard'
import { Web3ReactProvider } from '@web3-react/core'
import { MetaMaskProvider } from '../src/metamask/hooks/metamask'

function getLibrary(provider, connector) {
  return new Web3(provider)
}

export default function App() {
    return (
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetaMaskProvider>
          <Dashboard />
        </MetaMaskProvider>
      </Web3ReactProvider>
    )
}