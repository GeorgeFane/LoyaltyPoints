import { useEffect } from 'react'
import { Button } from '@mui/material'
import useMetaMask from './hooks/metamask';

function App() {
  
  const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask()

  const handleClick = () => {
    if (isActive) {
      disconnect();
    }
    else {
      connect();
    }
  }

  const buttonText = !isActive ? 'connect with metamask' : 'disconnect'
  const text = isActive ? 'Connected Account:' + account : 'Not Connected';

  return (
    <div className="App">
      <header className="App-header">

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleClick}
        >
          { buttonText }
        </Button>

        <div className="mt-2 mb-2">
          { text }
        </div>
      </header>
    </div>
  );
}

export default App;
