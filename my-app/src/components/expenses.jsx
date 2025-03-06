import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Health', value: 300 },
  { name: 'Gift', value: 150 },
  { name: 'Grocery', value: 400 },
  { name: 'Shopping', value: 350 },
  { name: 'Education', value: 500 },
  { name: 'Entertainment', value: 200 },
  { name: 'Travel', value: 450 },
  { name: 'Utilities', value: 250 },
  { name: 'Home', value: 600 },
  { name: 'Dining', value: 275 },
];

const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28BFE',
  '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'
];

function Expenses() {
  return (
    <div className='expenses-table' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <PieChart width={550} height={300}>
        <Pie 
          data={data} 
          cx="40%" 
          cy="50%" 
          outerRadius={90}  
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend 
          layout="vertical" 
          align="right" 
          verticalAlign="middle"
          iconSize={10} 
          wrapperStyle={{ fontSize: '10px' }} 
          style={{ fontSize: '10px' }} // Correct way to decrease font size
        />
      </PieChart>
    </div>
  );
}

export default Expenses;
