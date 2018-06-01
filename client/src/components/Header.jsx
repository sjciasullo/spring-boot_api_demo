import React from 'react';
import '../styles/Header.css';

import UserHeader from './UserHeader';

function Header(props){
  // PROPS :
  // users, userId, setUser
  const users = props.users;
  const userId = props.userId;
  const setUser = props.setUser;

  function clickUser(event){
    console.log(event.target.value);
    console.log(typeof event.target.value)
    const selectedId = parseInt(event.target.value, 10);
    if(selectedId !== userId){
      setUser(selectedId);
    }
  }

  const selectUserTag = (
    <select onChange={clickUser}>
      <option value={0}>Select a User</option>
      {users.map(user => {
        return (
          <option value={user.id} key={user.id}>{user.userName}</option>
        )
      })}
    </select>
  );

  return(
    <header>
      {/* {Fix me using trequals with this logic breaks flow} */}
      {userId === 0 ? (
        <div className="no-user-header">
          <h1>Activity Tracker</h1>
          {selectUserTag}
        </div>
      ) : (
        <div className="user-header">
          <UserHeader 
            userName={users[userId - 1].userName} 
            tagLine={users[userId - 1].tagLine}
          />
          {selectUserTag}
        </div>
        
      )}
      
    </header>
  )
}

export default Header;