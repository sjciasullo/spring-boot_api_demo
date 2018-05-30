import React, { Component } from 'react';

class ActivityForm extends Component{
  constructor(props){
    // props will need to have userId and activity id
    super(props);
    this.state = {
      apiLoaded: false,
      totalMinutes: "",
      activityName: "",
      month: "",
      notes: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount(){
    this.getActivity(this.props.activityId);
  }

  // deal with getting next activity 
  // alternative would be getting the activity in main display and passing it down,
  // but alas this would not reset the state
  componentWillReceiveProps(nextProps){
    if(nextProps.activityId !== this.props.activityId){
      this.getActivity(nextProps.activityId);
    }
  }
  

  getActivity(id){
    // if activity is 0 then we are trying to create a new activity
    if(id !== 0){
      fetch(`http://localhost:8080/activities/${id}`, {
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
    if(this.props.activityId === 0){
      // post new
    } else {
      // patch it
    }

  }

  render(){
    return(
      <div className="activity-form-container">
        <h2>{this.props.activityId !== 0? 'Edit ' : 'Create '}Activity</h2>
        {this.state.apiLoaded && (
          <div className="form-wrapper">
          {/* conditional for user is not correct */}
            <form onSubmit={this.handleSubmit}>
              <input name="userId" onChange={this.handleInputChange} type="hidden"  
                value={this.props.userId}
              />
              <input name="activityName" onChange={this.handleInputChange} type="text" 
                placeholder="Activity Name" value={this.state.activityName}
              />
              <br />
              {this.props.activityId === 0 && (
                <input name="month" onChange={this.handleInputChange} type="text" 
                placeholder="Month" value={this.state.month}
              />
              )}
              {this.props.activityId === 0 && <br />}
              <input name="totalMinutes" onChange={this.handleInputChange} type="number"  
                placeholder="Total Minutes" value={this.state.totalMinutes}
              />
              <br />
              <input name="notes" onChange={this.handleInputChange} type="text"
                placeholder="Notes" value={this.state.notes}
              />
              <br />
              {this.props.userId === '0' ? (
                <h3>Please select a user before submitting!</h3>
              ) : (
                <input type="submit" value="Save"/>
              )}
              
            </form>
          </div>
          
        )}
      </div>
    )
  }
}

export default ActivityForm;