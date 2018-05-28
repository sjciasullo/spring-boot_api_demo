import React, {Component} from 'react';

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
      <p>This is a user header. {this.state.userName} wants to {this.state.tagLine} </p>
    )
  }
}

export default UserHeader;