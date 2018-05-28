import React from 'react';
import '../styles/Header.css';

function Header(props){
  // PROPS :
  // users, userId, setUser
  const users = props.users;
  const userId = props.userId;

  function clickUser(event){
    const selectedId = event.target.value;
    if(selectedId !== userId){
      
    }
  }

  return(
    <header>
      <h1>Activity Tracker</h1>
      <select onChange={clickUser}>
        <option>Select a User</option>
        {users.map(user => {
          return (
            <option value={user.id} key={user.id}>{user.userName}</option>
          )
        })}
      </select>
    </header>
  )
}

export default Header;