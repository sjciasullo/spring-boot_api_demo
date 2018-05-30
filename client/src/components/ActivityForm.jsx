import React, { Component } from 'react';

class ActivityForm extends Component{
  constructor(props){
    // props will need to have userId and activity id
    super(props);
    this.state = {
      apiLoaded: false,
      totalMinutes: 0,
      activityName: "",
      notes: ""
    }
  }

  componentDidMount(){
    const activityId = this.props.activityId;
    // if activity is 0 then we are trying to create a new activity
    if(activityId !== 0){
      fetch(`http://localhost:8080/activities/${activityId}`, {
        method: 'GET'
      }).then(res => res.json())
      .then(json => {
        this.setState({
          activityName: json.activityName,
          totalMinutes: json.totalMinutes, // we may need to be careful of types here
          notes: json.notes,
          apiLoaded: true
        })
      }).catch(err => console.log(err))
    } else {
      this.setState({
        apiLoaded: true
      })
    }
  }

  handleInputChange(event){
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]:value,
    })
  }

  // need to send put request with userId as well 
  handleSubmit(event){
    event.preventDefault();
  }

  render(){
    return(
      <div className="activity-single">
        <h2>{this.props.activityId !== 0? 'Edit ' : 'Create '}Activity</h2>
        {this.state.apiLoaded && (
          <form onSubmit={this.handleSubmit}>
            <input name="userId" onChange={this.handleInputChange} type="hidden"  
              value={this.props.userId}
            />
            <input name="activityName" onChange={this.handleInputChange} type="text" 
              placeholder="Activity Name" value={this.state.activityName}
            />
            <input name="totalMinutes" onChange={this.handleInputChange} type="text"  
              placeholder="Total Minutes" value={this.state.totalMinutes}
            />
            <input name="notes" onChange={this.handleInputChange} type="text"
              placeholder="Notes" value={this.state.notes}
            />
            <input type="submit" value="submit"/>
          </form>
        )}
      </div>
    )
  }
}

export default ActivityForm;