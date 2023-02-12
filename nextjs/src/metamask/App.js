import React, { useEffect } from 'react'
import { Button, Collapse, Alert, IconButton } from '@mui/material'
import { CloseIcon } from '@mui/icons-material'
import { useWeb3React } from '@web3-react/core';

import useMetaMask from './hooks/metamask';
import TransitionAlerts from './TransitionAlerts';

function App({ alert }) {
  
  const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask()
  const { active } = useWeb3React()
  const [open, setOpen] = React.useState(false);

  console.log('isActive', isActive, active)

  const handleClick = () => {
    if (isActive) {
      disconnect();
      setOpen(false);
    }
    else {
      connect();
      if (alert) {
        setOpen(true);
      }
    }
  }

  const account_short = account?.substring(0, 7) + '...' + account?.substring(37)
  const buttonText = !isActive ? 'connect with metamask' : 'disconnect (' + account_short + ')'

  const text = isActive ? 'Connected: ' + account_short : 'Not Connected';

  return (
    <div className="App">
      <header className="App-header">

        <Button
          color='inherit'
          type="submit"
          fullWidth
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleClick}
        >
          { buttonText }
        </Button>
        
        <TransitionAlerts
          open={open}
          setOpen={setOpen}
        />
      </header>
    </div>
  );
}

export default App;
