import React from 'react';

function ActivitiesList(props){
  const activities = props.activities;

  const activitiesListTags = activities.map((activity) => {
    return (
      <li key={activity.id}>{activity.activityName} for {activity.totalMinutes} minutes in {activity.month}</li>
    )
  })

  return (
    <div className="activities-list">
      <h2>Activity Log</h2>
      <ul>
        {activitiesListTags}
      </ul>
    </div>
  )
}

export default ActivitiesList;