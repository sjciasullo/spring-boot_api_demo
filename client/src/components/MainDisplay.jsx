import React, { Component } from 'react';
import ActivitiesLinechart from '../components/ActivitiesLineChart';
import ActivitiesList from '../components/ActivitiesList';

class MainDisplay extends Component{
  constructor(props){
    // PROP LIST
    // userId, activities, pageDisplay, singleId, viewSingle(id)
    super(props);
    this.state={
      
    }
  }

  render(){
    //determine page to render
    let displayComponents = [];
    switch(this.props.pageDisplay){
      case 'single':
        // use single component and pass it the activity id to fetch it
        break;
      default:
        displayComponents.push(<h2 key={0}>{this.props.userId !== '0' ? "Your " : "Total "}Monthly Activities</h2>);
        displayComponents.push(<ActivitiesLinechart key={1} activities={this.props.activities}/>);
        displayComponents.push(<ActivitiesList key={2} activities={this.props.activities} />);
        break;
    }

    return(
      <div className="main-display">
        {displayComponents} 
      </div>
    )
  }
}

export default MainDisplay;