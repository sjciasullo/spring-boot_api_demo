import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts';

function ActivitesLinechart(props){
  const activities = props.activities;

  let monthTracker = {};
  const monthlyData = [];
  let uniqueActivities = {};
  //format activites for linechart data
  activities.forEach(activity => {
    const month = activity.month;
    const name = activity.activityName;

    //add activity name to uniqueactivities if it doesn't exist there
    if(!(name in uniqueActivities)){
      uniqueActivities[name] = 0;
    }

    // look for month in month tracker and sum activity if it exists
    if(month in monthTracker){
      if(name in monthlyData[monthTracker[month]]) {
        monthlyData[monthTracker[month]][name] += activity.totalMinutes;
      } else {
        monthlyData[monthTracker[month]][name] = activity.totalMinutes;
      }
    } else {
      const addedIndex = monthlyData.push({month: month}) - 1;
      monthlyData[addedIndex][name] = activity.totalMinutes;
      monthTracker[month] = addedIndex;
    }
  })

  console.log("monthly data is: ");
  console.log(monthlyData);
  console.log(uniqueActivities);

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