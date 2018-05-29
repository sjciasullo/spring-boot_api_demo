import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts';

function ActivitesLinechart(props){
  const activities = props.activities;

  //format activites for linechart data

  const data = [
    {month: 'jan', sports: 80, music: 50}, 
    {month: 'feb', sports: 110, music: 100}, 
    {month: 'march', sports: 50, music: 200}
  ];

  //this is currently an example from recharts.org
  return (
    <LineChart width={730} height={250} data={data}
               margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sports" stroke="#8884d8" />
      <Line type="monotone" dataKey="music" stroke="#82ca9d" />
    </LineChart>
  )
}

export default ActivitesLinechart;