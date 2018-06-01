import React, { Component } from 'react';
import ActivitiesLinechart from './ActivitiesLineChart';

class VisualContainer extends Component {
  constructor(props) {
    /* PROP LIST */
    // activities
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className='visual-container'>
        <ActivitiesLinechart activities={this.props.activities}/>
      </div>
    );
  }
}

export default VisualContainer;