import React, { useState } from 'react';

const EMICalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / (12 * 100);
    const t = parseFloat(time) * 12;

    if (!p || !r || !t) {
      alert('Please enter valid numbers');
      return;
    }

    const emiValue = (p * r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);
    setEmi(`Your monthly EMI is ₹${emiValue.toFixed(2)}`);
    // Reset inputs
    setPrincipal('');
    setRate('');
    setTime('');
  };

  return (
    <div className="calculator">
      <h2>EMI Calculator</h2>
      <div className="input-group">
        <label>Principal Amount:</label>
        <input
          type="text"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value.replace(/[^0-9.₹]/g, ''))}
          placeholder="Enter principal amount (e.g. ₹500000)"
        />
      </div>
      <div className="input-group">
        <label>Annual Interest Rate (%):</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Enter annual interest rate (e.g. 12)"
        />
      </div>
      <div className="input-group">
        <label>Time (in years):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter loan tenure (in years)"
        />
      </div>
      <button onClick={calculateEMI}>Calculate EMI</button>

      {emi && <div className="results">{emi}</div>}
    </div>
  );
};

export default EMICalculator;
