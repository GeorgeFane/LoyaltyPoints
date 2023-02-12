import React, { useEffect } from 'react'
import { Button, Collapse, Alert, IconButton } from '@mui/material'
import { CloseIcon } from '@mui/icons-material'

import useMetaMask from './hooks/metamask';
import TransitionAlerts from './TransitionAlerts';

function App() {
  
  const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask()
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    if (isActive) {
      disconnect();
      setOpen(false);
    }
    else {
      connect();
      setOpen(true);
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
        
        <TransitionAlerts
          open={open}
          setOpen={setOpen}
        />
      </header>
    </div>
  );
}

export default App;
