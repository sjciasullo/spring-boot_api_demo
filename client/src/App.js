import React, { Component } from 'react';

// Import Components needed at top level
import Header from './components/Header';

// Import Style
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
