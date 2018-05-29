import React from 'react';
import LineChart from 'recharts';

function ActivitesLinechart(props){
  const activities = props.activities;

  //format activites for linechart data

  //this is currently an example from recharts.org
  return (
    <LineChart width={730} height={250} data={activities}
               margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  )
}

export default ActivitesLinechart;