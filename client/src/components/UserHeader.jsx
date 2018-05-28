import React, {Component} from 'react';
import '../styles/UserHeader.css';

// Uses Class Component for editing user's tagline TODO
class UserHeader extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName: props.userName,
      tagLine: props.tagLine
    }
  }

  render(){
    return(
      <div className="user-info">
        <h1>{this.props.userName}: </h1>
        <p>"{this.props.tagLine}"</p>
      </div>
    )
  }
}

export default UserHeader;