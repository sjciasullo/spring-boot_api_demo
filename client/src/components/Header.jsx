import React from 'react';
import '../styles/Header.css';

function Header(props){
  // PROPS :
  // users, userId, setUser
  const users = props.users;
  const userId = props.userId;
  const setUser = props.setUser;

  function clickUser(event){
    const selectedId = event.target.value;
    if(selectedId !== userId){
      setUser(selectedId);
    }
  }

  return(
    <header>
      {userId === 0 ? (
        <div className="no-user-header">
          <h1>Activity Tracker</h1>
          <select onChange={clickUser}>
            <option>Select a User</option>
            {users.map(user => {
              return (
                <option value={user.id} key={user.id}>{user.userName}</option>
              )
            })}
          </select>
        </div>
      ) : (
        <h2>{userId} is selected</h2>
      )}
      
    </header>
  )
}

export default Header;