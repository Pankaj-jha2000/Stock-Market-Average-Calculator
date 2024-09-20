import React, { useState } from 'react';

const PercentageCalculator = () => {
  const [total, setTotal] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState(null);

  const calculatePercentage = () => {
    const totalValue = parseFloat(total);
    const percentageValue = parseFloat(percentage);

    if (!totalValue || !percentageValue) {
      alert('Please enter valid numbers');
      return;
    }

    const calculatedValue = (totalValue * percentageValue) / 100;
    setResult(`The ${percentageValue}% of ₹${totalValue} is ₹${calculatedValue.toFixed(2)}`);
    // Reset inputs
    setTotal('');
    setPercentage('');
  };

  return (
    <div className="calculator">
      <h2>Percentage Calculator</h2>
      <div className="input-group">
        <label>Total Amount:</label>
        <input
          type="text"
          value={total}
          onChange={(e) => setTotal(e.target.value.replace(/[^0-9.₹]/g, ''))}
          placeholder="Enter total amount (e.g. ₹1000)"
        />
      </div>
      <div className="input-group">
        <label>Percentage:</label>
        <input
          type="number"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
          placeholder="Enter percentage (e.g. 10)"
        />
      </div>
      <button onClick={calculatePercentage}>Calculate Percentage</button>

      {result && <div className="results">{result}</div>}
    </div>
  );
};

export default PercentageCalculator;
