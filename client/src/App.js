import React, { Component } from 'react';

// Import Components needed at top level
import Header from './components/Header';
import MainDisplay from './components/MainDisplay';

// Import Style
import './styles/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      usersLoaded: false,
      users: [],
      userId: '0', // id of selected user
      activitiesLoaded: false,
      activities: [],
      selectedActivities: []
    }

    this.setUser = this.setUser.bind(this);
    this.editActivity = this.editActivity.bind(this);
  }

  componentDidMount(){
    this.getUsers();
    this.getActivities();
  }

  // Calls to API
  getUsers(){
    fetch('http://localhost:8080/users', {
      method: 'GET'
    }).then(res => res.json())
    .then(json => {
      this.setState({
        users: json,
        usersLoaded: true
      })
    }).catch(err => console.log(err))
  }

  getActivities(){
    fetch('http://localhost:8080/activities', {
      method: 'GET'
    }).then(res => res.json())
    .then(json => {
      this.setState({
        activities: json,
        selectedActivities: json,
        activitiesLoaded: true
      })
    }).catch(err => console.log(err))
  }

  // End API calls

  // Changing State from below App component
  //sets user which will trickle down changing data
  setUser(id){
    id = id.toString();
    let filterActivities = this.state.activities.filter(activity => activity.userId == id);

    //this may be bad form because changing the state based on prevState
    this.setState({
      userId: id,
      selectedActivities: id !== '0' ? filterActivities : this.state.activities
    })

    // alternative using prevState
    /*this.setState(prevState => ({
      userId: id,
      selectedActivities: id !== '0' ? filterActivities : prevState.activities
    }))
    */
  }

  //addActivity

  editActivity(editedActivity){
    // this method is O(n) but better than making an extra API call,
    // however, with more specifically constructed api, may look different

    // find object in both arrays in state
    let activityCopy = [...this.state.activities]
    const activityIndex = activityCopy.findIndex( (element) => {
      return element.id === editedActivity.id;
    })
    let filteredCopy = [...this.state.selectedActivities]
    const filteredIndex = filteredCopy.findIndex( (element) => {
      return element.id === editedActivity.id;
    })

    // update arrays
    activityCopy[activityIndex] = editedActivity;
    filteredCopy[filteredIndex] = editedActivity;

    // save in state
    this.setState({
      activities: activityCopy,
      selectedActivities: filteredCopy,
    })
  }

  //deleteActivity

  // End State Changers

  render() {
    return (
      <div className="App">
        {this.state.usersLoaded ? (
          <Header users={this.state.users} userId={this.state.userId} setUser={this.setUser}/>
        ) : (
          <p>Loading. . .</p>
        )}
        
        <div className="main-display-container">
          {this.state.activitiesLoaded ? (
            <MainDisplay
              pageDisplay="all"
              userId={this.state.userId}
              activities={this.state.selectedActivities}
              editActivity={this.editActivity}
            />
          ) : (
            <p>Loading. . .</p>
          )}
        </div>

      </div>
    );
  }
}

export default App;
