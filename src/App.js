import React, { useState } from 'react';
import Box from '@mui/material/Box';
import GridInputs from './GridInputs';
import GridResults from './GridResults';
import { makeMoney } from './makeMoney';
import './App.css';

function App() {
  const [totals, setTotals] = useState(null);
  const moneyMaker = totals ? makeMoney(
    parseInt(totals.homeTotal),
    parseInt(totals.awayTotal),
    parseInt(totals.minutesPlayed),
    parseInt(totals.currentLine)
  ) : null;
  return (
    <Box sx={{ textAlign: 'center' }}>
      {totals ? <GridResults setTotals={setTotals} results={moneyMaker} />
        : <GridInputs setTotals={setTotals} />}
    </Box>
  );
}
export default App;
