import React, { Component } from 'react';
import '../styles/MainDisplay.css';

import ActivitiesLinechart from './ActivitiesLineChart';
import ActivitiesList from './ActivitiesList';
import ActivityForm from './ActivityForm';

class MainDisplay extends Component{
  constructor(props){
    // PROP LIST
    // userId, activities, pageDisplay, singleId, viewSingle(id)
    super(props);
    this.state={
      activityId: 0
    }

    this.switchEditActivity = this.switchEditActivity.bind(this);
  }

  switchEditActivity(id){
    this.setState({
      activityId: id,
    })
  }

  render(){

    return(
      <div className="main-display">
        <ActivitiesLinechart activities={this.props.activities}/>
        <div className="activities-container">
          <ActivitiesList 
            activities={this.props.activities} 
            switchEditActivity={this.switchEditActivity}
          />
          <ActivityForm 
            userId={this.props.userId} 
            activityId={this.state.activityId}
            editActivity={this.props.editActivity}
            addActivity={this.props.addActivity}
            deleteActivity={this.props.deleteActivity}
          />
        </div>
      </div>
    )
  }
}

export default MainDisplay;