import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setListOfUsers(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    return (
      <div>
        {/* Display the list of users */}
        {listOfUsers.map(user => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            {/* Add more user details as needed */}
          </div>
        ))}
      </div>
    );
  };
  
  export default UserList;
  