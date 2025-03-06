import React from 'react';

function Transaction() {
  return (
    <div className="transaction-container">
      <div className="transaction-box">
        <h3>Income</h3>
        <p>₹ 50,000</p>
      </div>
      <div className="transaction-box">
        <h3>Expenses</h3>
        <p>₹ 30,000</p>
      </div>
    </div>
  );
}

export default Transaction;
