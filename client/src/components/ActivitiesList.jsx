import React from 'react';
import '../styles/ActivitiesList.css';

function ActivitiesList(props){
  const activities = props.activities;
  const switchEditActivity = props.switchEditActivity;

  // create list tags
  const activitiesListTags = activities.map((activity) => {
    return (
      <li key={activity.id} onClick={() => switchEditActivity(activity.id)}>
        {activity.activityName} for {activity.totalMinutes} minutes in {activity.month}
      </li>
    )
  })

  return (
    <div className="activities-list">
      <h2>Activity Log</h2>
      <div className="list-tags-container">
        <ul>
          {activitiesListTags}
        </ul>
      </div>
    </div>
  )
}

export default ActivitiesList;