import React from 'react';

function ActivitiesList(props){
  const activities = props.activities;

  const activitiesListTags = activities.map((activity) => {
    return (
      <li>{activity.activityName} for {activity.totalMinutes} in {activity.month}</li>
    )
  })

  return (
    <div className="activities-list">
      <h2>Activity List</h2>
      <ul>
        {activitiesListTags}
      </ul>
    </div>
  )
}

export default ActivitiesList;