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

    // alternative with prevState
    /*this.setState(prevState => ({
      userId: id,
      selectedActivities: id !== '0' ? filterActivities : prevState.activities
    }))
    */
  }

  //addActivity

  //editActivity

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
