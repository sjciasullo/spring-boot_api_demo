import React, { Component } from 'react';

// Import Components needed at top level
import Header from './components/Header';

// Import Style
import './styles/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loaded: false,
      users: [],
    }
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
      this.setState({users: json})
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
