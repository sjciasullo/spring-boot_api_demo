import React, { Component } from 'react';
import ActivitiesLinechart from './ActivitiesLineChart';
import ActivitiesList from './ActivitiesList';
import ActivityForm from './ActivityForm';

class MainDisplay extends Component{
  constructor(props){
    // PROP LIST
    // userId, activities, pageDisplay, singleId, viewSingle(id)
    super(props);
    this.state={
      
    }
  }

  render(){

    return(
      <div className="main-display">
        <ActivitiesLinechart activities={this.props.activities}/>
        <div className="activities-container">
          <ActivitiesList activities={this.props.activities} />
          <ActivityForm userId={0} activityId={0}/>
        </div>
      </div>
    )
  }
}

export default MainDisplay;