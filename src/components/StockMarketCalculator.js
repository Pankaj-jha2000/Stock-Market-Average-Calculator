import React, { useState } from 'react';

const StockMarketCalculator = ({ toggleTheme, theme }) => {
  const [oldQuantity, setOldQuantity] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [results, setResults] = useState(null);

  const calculateAverage = () => {
    const oldQty = parseFloat(oldQuantity);
    const oldPr = parseFloat(oldPrice.replace('₹', ''));
    const newQty = parseFloat(newQuantity);
    const newPr = parseFloat(newPrice.replace('₹', ''));

    if (!oldQty || !oldPr || !newQty || !newPr) {
      alert('Please enter valid numbers');
      return;
    }

    const totalOldAmount = oldQty * oldPr;
    const totalNewAmount = newQty * newPr;
    const totalQuantity = oldQty + newQty;
    const totalAmount = totalOldAmount + totalNewAmount;
    const averagePrice = totalAmount / totalQuantity;

    setResults({
      totalOldAmount: `₹${totalOldAmount.toFixed(2)}`,
      totalNewAmount: `₹${totalNewAmount.toFixed(2)}`,
      totalQuantity,
      averagePrice: `₹${averagePrice.toFixed(2)}`,
      totalInvestment: `₹${totalAmount.toFixed(2)}`,
    });

    // Reset inputs
    setOldQuantity('');
    setOldPrice('');
    setNewQuantity('');
    setNewPrice('');
  };

  return (
    <div className="calculator">
      <h2>Stock Market Average Calculator (INR)</h2>
      <div className="input-group">
        <label>Old Quantity:</label>
        <input
          type="number"
          value={oldQuantity}
          onChange={(e) => setOldQuantity(e.target.value)}
          placeholder="Enter old quantity"
        />
      </div>
      <div className="input-group">
        <label>Old Price:</label>
        <input
          type="text"
          value={oldPrice}
          onChange={(e) => setOldPrice(e.target.value.replace(/[^0-9.₹]/g, ''))}
          placeholder="Enter old price (e.g. ₹100.00)"
        />
      </div>
      <div className="input-group">
        <label>New Quantity:</label>
        <input
          type="number"
          value={newQuantity}
          onChange={(e) => setNewQuantity(e.target.value)}
          placeholder="Enter new quantity"
        />
      </div>
      <div className="input-group">
        <label>New Price:</label>
        <input
          type="text"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value.replace(/[^0-9.₹]/g, ''))}
          placeholder="Enter new price (e.g. ₹96.00)"
        />
      </div>
      <button onClick={calculateAverage}>Calculate Average</button>

      {results && (
        <div className="results">
          <h3>Results</h3>
          <p>The amount invested in the 1st purchase: {results.totalOldAmount}</p>
          <p>The amount invested in the 2nd purchase: {results.totalNewAmount}</p>
          <p>Total Quantity: {results.totalQuantity}</p>
          <p>Average Price: {results.averagePrice}</p>
          <p>Total Investment: {results.totalInvestment}</p>
        </div>
      )}
    </div>
  );
};

export default StockMarketCalculator;
