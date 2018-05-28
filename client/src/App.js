import React, { Component } from 'react';

// Import Components needed at top level
import Header from './components/Header';

// Import Style
import './styles/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      usersLoaded: false,
      users: [],
      userId: 0 // id of selected user
    }

    this.setUser = this.setUser.bind(this);
  }

  componentDidMount(){
    this.getUsers();
  }

  // Calls to API
  getUsers(){
    fetch('http://localhost:8080/users', {
      method: 'GET'
    }).then(res => res.json())
    .then(json => {
      console.log(json);
      this.setState({
        users: json,
        usersLoaded: true
      })
    }).catch(err => console.log(err))
  }

  // End API calls

  // Changing State from below App component
  setUser(id){
    this.setState({
      userId: id,
    })
  }

  // End State Changers

  render() {
    return (
      <div className="App">
        {this.state.usersLoaded ? (
          <Header users={this.state.users} userId={this.state.userId} setUser={this.setUser}/>
        ) : (
          <p>Loading. . .</p>
        )}
      </div>
    );
  }
}

export default App;
