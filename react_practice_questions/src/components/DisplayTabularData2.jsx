import { useState, useEffect } from "react";

/**
 * Ques - 7. 
 * Making a GET request to https://randomuser.me/api/?results=50
 * returns the information of 50 users.
 *
 * In this sandbox, you are required to convert some
 * of that information into a table.
 *
 * The columns of the table are mentioned in
 * the sandbox below.
 */

export function DisplayTabularData2() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then(({ results }) => {
        setUsers(results);
      });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        {
            users.map((user)=>(
            // users.map((user, userIdx)=>(
                // <tr key={userIdx}>
            //      user.map((cellValue, cellValueIdx) => (
            //       <td key={`${userIdx}-${cellValueIdx}`}>{cellValue}</td>
            //      ))}
            //   </tr>
            // ));   
            //  
                <tr key={user.login.username}>
                    <td>{user.name.first}</td>
                    <td>{user.location.city}</td>
                    <td>{user.location.state}</td>
                    <td>{user.location.country}</td>
                    <td>{user.login.username}</td>
                    <td>{user.phone}</td>
                    <td>{user.location.coordinates.latitude}</td>
                    <td>{user.location.coordinates.longitude}</td>
                </tr>
            ))
        }
        </thead>
        <tbody>{/* Add the data here */}</tbody>
      </table>
      <p>Sample Object: </p>
      <pre>{JSON.stringify(users[0], 0, 2)}</pre>
    </>
  );
}
