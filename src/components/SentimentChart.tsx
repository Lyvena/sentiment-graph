import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sentiment: 65 },
  { name: 'Feb', sentiment: 59 },
  { name: 'Mar', sentiment: 80 },
  { name: 'Apr', sentiment: 81 },
  { name: 'May', sentiment: 56 },
  { name: 'Jun', sentiment: 55 },
  { name: 'Jul', sentiment: 40 },
];

const SentimentChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sentiment" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SentimentChart;