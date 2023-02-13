import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

import Web3 from 'web3'
import useMetaMask from '../metamask/hooks/metamask'

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits({ total }) {
  return (
    <React.Fragment>
      <Title>Total Points</Title>
      <Typography component="p" variant="h4">
        { total }
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on February 12, 2023
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View history
        </Link>
      </div>
    </React.Fragment>
  );
}
