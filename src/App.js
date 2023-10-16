import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <center><h1>Dynamic Table</h1></center>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.image}</td>
              <td>{item.FirstName}</td>
              <td>{item.LastName}</td>
              <td>{item.Gender}</td>
              <td>{item.Email}</td>
              <td>{item.Username}</td>
              <td>{item.Domain}</td>
              <td>{item.IP}</td>
              <td>{item.University}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
