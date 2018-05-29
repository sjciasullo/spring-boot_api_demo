import React, { Component } from 'react';
import ActivitiesLinechart from '../components/ActivitiesLineChart';

class MainDisplay extends Component{
  constructor(props){
    // PROP LIST
    // userId, activities
    super(props);
    this.state={

    }
  }

  render(){
    return(
      <div className="main-display">
        <h2>{this.props.userId !== '0' ? "Your " : "Total "}Monthly Activities</h2>
        <ActivitiesLinechart activities={this.props.activities}/>
      </div>
    )
  }
}

export default MainDisplay;