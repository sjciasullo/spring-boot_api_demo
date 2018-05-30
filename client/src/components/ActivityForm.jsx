import React, { Component } from 'react';
import '../styles/ActivityForm.css';

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteActivity = this.deleteActivity.bind(this);
  }

  // ------ LIFE CYCLE ------
  componentDidMount(){
    this.getActivity(this.props.activityId);
  }

  // deal with getting next activity 
  // alternative would be getting the activity in main display and passing it down,
  // but alas this would not reset the state
  componentWillReceiveProps(nextProps){
    if(nextProps.activityId !== this.props.activityId){
      if(nextProps.activityId === 0){
        this.setState({
          totalMinutes: "",
          activityName: "",
          month: "",
          notes: ""
        })
      } else {
        this.getActivity(nextProps.activityId);
      }
    }
  }
  // ------ END LIFE CYCLE ------

  // ------ FETCHING ------
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

  //after patching activity, update in top state
  patchActivity(id){
    fetch(`http://localhost:8080/activities/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        activityName: this.state.activityName,
        totalMinutes: this.state.totalMinutes,
        notes: this.state.notes
      })
    }).then(res => res.json())
    .then(json => {
      this.props.editActivity(json);
    }).catch(err => console.log(err))
  }

  // after posting, add to top state arrays
  postActivity(){
    fetch("http://localhost:8080/activities", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        activityName: this.state.activityName || "default",
        userId: this.props.userId,
        month: this.state.month || "month",
        totalMinutes: this.state.totalMinutes || 0,
        notes: this.state.notes
      })
    }).then(res => res.json())
    .then(json => {
      this.props.addActivity(json);
    }).catch(err => console.log("error:", err))
  }

  deleteActivity(){
    fetch(`http://localhost:8080/activities/${this.props.activityId}`, {
      method: 'DELETE'
    }).then(res => res.json())
    .then(json => {
      this.props.deleteActivity(this.props.activityId);
    }).catch(err => console.log(err))
  }

  // ------ FETCHING ------
  
  // ------ FORM HANDLERS ------
  handleInputChange(event){
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]:value,
    })
  }

  // need to send put request with userId as well 
  handleSubmit(event){
    const activityId = this.props.activityId;
    event.preventDefault();
    if(this.props.activityId === 0){
      // post new
      this.postActivity();
    } else {
      // patch it
      this.patchActivity(activityId);      
    }

  }
  // ------ END FORM HANLDERS ------

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
              {this.props.activityId !== 0 && (
                <button id="delete" onClick={this.deleteActivity}>Delete</button>
              )}
              
            </form>
          </div>
          
        )}
      </div>
    )
  }
}

export default ActivityForm;