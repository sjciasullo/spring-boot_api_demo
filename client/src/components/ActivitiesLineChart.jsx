import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts';
import randomColor from 'randomcolor';

function ActivitiesLinechart(props){
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

  //create lines for chart
  const lines = [];
  for(let key in uniqueActivities){
    lines.push(
      <Line type="monotone" dataKey={key} 
            stroke={randomColor({luminosity: 'bright'})} key={key}
      />
    )
  }

  //this is currently an example from recharts.org
  return (
    <LineChart width={730} height={400} data={monthlyData}
               margin={{ top: 20, right: 50, left: 50, bottom: 20 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      {lines}
    </LineChart>
  )
}

export default ActivitiesLinechart;