import React, { Component } from 'react';

class ActivitySingle extends Component{
  constructor(props){
    super(props);
    this.state = {
      totalMinutes = 0,
      activityName = "",
      notes = ""
    }
  }

  // need to send put request with userId as well 

  render(){
    return(
      <div className="activity-single">
        <h2>Activity Entry</h2>
        <p>{}</p>
      </div>
    )
  }
}

export default ActivitySingle;