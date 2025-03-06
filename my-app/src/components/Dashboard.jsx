import React from 'react';
import Expenses from './expenses';
import Header from './Header';
import Transactions from './Transactions';
import Totalbox from './Totalbox';

function Dashboard() {
  return (
   <>
   <div>
    <Header />
   </div>
   <div>
    <Totalbox />
   </div>
    <div className="dashboard-container">
      <div className="expenses-box">
        <h2>Expenses</h2>
        <Expenses />
      </div>
      <div className="transactions-box">
        <h2>Transactions</h2>
        <Transactions />
      </div>
    </div>
   </>
  );
}

export default Dashboard;
