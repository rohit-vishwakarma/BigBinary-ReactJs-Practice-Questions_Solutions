import {useState, useEffect} from 'react';
/**
 * Ques - 6.
 * Make a GET request to
 * https://randomuser.me/api/?results=20
 * and sequentially display for each user
 * their full name and their picture.
 *
 */

 export function DisplayTabularData1() {

    const [loading, setLoad] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const fetching = async ()=>{
            setLoad(true);
            const fetchedData = await fetch('https://randomuser.me/api/?results=20');
            const {results : users } = await fetchedData.json();
            setUsers(users);
            // console.log(users);
            // console.log(data);
            setLoad(false);
        }
        fetching();
    },[])
    if(loading) return <h1>Loading...</h1>;
    return (
      <>
      {
        users.map((user, userIdx)=>(
        <div key={userIdx}>
          <h1>{Object.values(user.name).join(" ")}</h1>
          {/* <span>{user.picture}</span> */}
          <img src={user.picture.thumbnail}/>
        </div>
        ))
      }
        
      </>
    );
  }
  