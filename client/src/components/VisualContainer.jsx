import React, { Component } from 'react';
import '../styles/VisualContainer.css';
import ActivitiesLinechart from './ActivitiesLineChart';

class VisualContainer extends Component {
  constructor(props) {
    /* PROP LIST */
    // activities
    super(props);
    this.state = {
      visual: "LineChart"
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(visual){
    this.setState({
      visual: visual
    })
  }

  getTabSelected(tab){
    return tab === this.state.visual ? "selected" : "unselected";
  }

  render() {
    let VisualComponent = null;
    switch(this.state.visual){
      case "LineChart":
        VisualComponent = <ActivitiesLinechart activities={this.props.activities}/>;
        break;
      default:
        VisualComponent = <p>An error has occurred!</p>
    }

    return (
      <div className='visual-container'>
        <div className='tab-holder'>
          <div 
            className={"tab " + this.getTabSelected("LineChart")}
            onClick={() => this.changeTab("LineChart")}>
            Graph
          </div>
          <div 
            className={'tab ' + this.getTabSelected("Map")}
            onClick={() => this.changeTab("Map")}>
            Map
          </div>
        </div>
        {VisualComponent}
      </div>
    );
  }
}

export default VisualContainer;